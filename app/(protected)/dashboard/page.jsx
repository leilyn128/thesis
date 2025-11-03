"use client"
import { useEffect, useState } from "react"
import { supabase } from "../../../lib/supabaseClient"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts"
import Papa from "papaparse"
import * as XLSX from "xlsx"

export default function DashboardPage() {
  const [session, setSession] = useState(null)
  const [budgetData, setBudgetData] = useState([])
  const [breakdownData, setBreakdownData] = useState({})
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [selectedYear, setSelectedYear] = useState(null)

  // === Watch for Auth Session ===
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      if (session) {
        fetchBudgetData()
        fetchBreakdownData()
      }
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      if (session) {
        fetchBudgetData()
        fetchBreakdownData()
      }
    })

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  // === Fetch Yearly Total Income ===
  async function fetchBudgetData() {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from("yearly_budget")
        .select("year,total_income")
        .order("year", { ascending: true })

      if (error) throw error

      setBudgetData(
        (data || []).map(d => ({
          year: Number(d.year),
          totalIncome: Number(d.total_income) || 0,
        }))
      )
    } catch (err) {
      console.error("❌ Error fetching yearly_budget:", err.message)
    } finally {
      setLoading(false)
    }
  }

 // === Fetch Breakdown (Income vs Appropriations, grouped per year) ===
async function fetchBreakdownData() {
  try {
    console.log("🔍 Fetching barangay_budget_breakdown…")

    const { data, error } = await supabase
      .from("barangay_budget_breakdown")
      .select("year, category, subcategory, description, amount")
      .order("year", { ascending: true })

    if (error) throw error
    if (!data?.length) {
      console.warn("⚠️ No breakdown data found.")
      return
    }

    console.log("✅ Data fetched:", data.length, "rows")

    // 🔹 Group per year (make sure year is treated as number)
    const grouped = {}

    data.forEach(row => {
      const year = Number(row.year)
      if (isNaN(year)) return

      if (!grouped[year]) {
        grouped[year] = { income: {}, appropriations: {} }
      }

      const cleanAmount =
        Number(String(row.amount).replace(/[,₱p\s]/gi, "")) || 0

      // 🔹 Determine which group (Income or Appropriations)
      const cat =
        row.category?.toLowerCase().includes("income")
          ? "income"
          : "appropriations"

      // 🔹 Label (subcategory > description)
      const label =
        row.subcategory?.trim() ||
        row.description?.trim() ||
        "Uncategorized"

      grouped[year][cat][label] =
        (grouped[year][cat][label] || 0) + cleanAmount
    })

    console.log("📊 Grouped Data Preview:", grouped)
    setBreakdownData(grouped)
  } catch (err) {
    console.error("❌ Breakdown fetch error:", err.message)
  }
}



  // === File Upload for yearly_budget ===
  async function handleFileUpload(event) {
    const file = event.target.files[0]
    if (!file) return
    setUploading(true)
    try {
      const fileName = file.name.toLowerCase()
      let rows = []

      if (fileName.endsWith(".csv")) {
        const text = await file.text()
        const parsed = Papa.parse(text, { header: true, skipEmptyLines: true })
        rows = parsed.data
      } else if (fileName.endsWith(".xlsx") || fileName.endsWith(".xls")) {
        const data = await file.arrayBuffer()
        const workbook = XLSX.read(data, { type: "array" })
        const sheet = workbook.Sheets[workbook.SheetNames[0]]
        rows = XLSX.utils.sheet_to_json(sheet)
      } else {
        alert("Please upload a CSV or Excel file (.xlsx/.xls).")
        return
      }

      const headers = Object.keys(rows[0] || {}).map(h => h.trim().toLowerCase())
      const yearHeader = headers.find(h => h.includes("year")) || "year"
      const incomeHeader = headers.find(h => h.includes("income")) || "total_income"

      for (const row of rows) {
        const year = Number(String(row[yearHeader]).trim())
        const incomeStr = String(row[incomeHeader])
          .replace(/[₱pP\s]/g, "")
          .replace(/,/g, "")
          .replace(/[^\d.-]/g, "")
          .trim()
        const total_income = parseFloat(incomeStr) || 0

        if (!year || isNaN(year) || total_income <= 0) continue

        await supabase
          .from("yearly_budget")
          .upsert({ year, total_income }, { onConflict: ["year"] })
      }

      fetchBudgetData()
      alert("✅ Data uploaded successfully.")
    } catch (err) {
      console.error("❌ Upload error:", err.message)
      alert("Error uploading file.")
    } finally {
      setUploading(false)
      event.target.value = null
    }
  }

  // === UI ===
  if (!session)
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-semibold text-gray-700">Please log in first</h2>
      </div>
    )

  if (loading) return <p className="p-6">Loading budget data...</p>

  const total = budgetData.reduce((sum, d) => sum + d.totalIncome, 0)
  const avg = budgetData.length ? total / budgetData.length : 0
  const max = Math.max(...budgetData.map(d => d.totalIncome), 0)
  const min = Math.min(...budgetData.map(d => d.totalIncome), 0)
  const currency = val =>
    new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" }).format(val)

  const selectedData = breakdownData[selectedYear] || {}
  const COLORS = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444", "#3B82F6", "#8B5CF6", "#14B8A6"]
  const toPieData = obj => Object.entries(obj || {}).map(([name, value]) => ({ name, value }))

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-semibold">Barangay Budget Dashboard</h2>
      <p className="text-sm text-gray-500 mb-4">Visual overview of total income (2015–2022)</p>

      <div className="mb-4">
        <label className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700">
          {uploading ? "Uploading..." : "Upload CSV or Excel (Year and Total Income)"}
          <input type="file" accept=".csv, .xlsx, .xls" className="hidden" onChange={handleFileUpload} />
        </label>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card label="Total Income" value={currency(total)} color="indigo" />
        <Card label="Average Income" value={currency(avg)} color="green" />
        <Card label="Highest Income" value={currency(max)} color="yellow" />
        <Card label="Lowest Income" value={currency(min)} color="red" />
      </div>

      {/* Chart */}
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-2">Yearly Income Trend</h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart
            data={budgetData}
            onClick={e => e?.activeLabel && setSelectedYear(e.activeLabel)}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="year" />
            <YAxis tickFormatter={val => `${(val / 1_000_000).toFixed(1)}M`} />
            <Tooltip formatter={v => currency(v)} labelFormatter={y => `Year: ${y}`} />
            <Line dataKey="totalIncome" stroke="#4F46E5" strokeWidth={3} dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Breakdown */}
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-2">
          {selectedYear ? `Budget Breakdown (${selectedYear})` : "Select a Year for Details"}
        </h3>
        {!selectedYear && <p className="text-gray-500">Click a year to view breakdown.</p>}

        {selectedYear && (
          <div className="flex flex-col lg:flex-row gap-8 justify-center mt-6">
            <PieSection title="Income Breakdown" data={selectedData.income} colors={COLORS} currency={currency} />
            <PieSection title="Appropriations Breakdown" data={selectedData.appropriations} colors={COLORS} currency={currency} />
          </div>
        )}
      </div>
    </div>
  )
}

// === Helper Components ===
function Card({ label, value, color }) {
  const colors = {
    indigo: "bg-indigo-50 text-indigo-700",
    green: "bg-green-50 text-green-700",
    yellow: "bg-yellow-50 text-yellow-700",
    red: "bg-red-50 text-red-700",
  }
  return (
    <div className={`p-4 rounded-lg text-center ${colors[color]}`}>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  )
}
export function PieSection({ title, data, colors, currency }) {
  const formatted = Object.entries(data || {}).map(([name, value]) => ({ name, value }))
  const total = formatted.reduce((sum, d) => sum + d.value, 0)

  const renderCustomLabel = (props) => {
    const { cx, cy, midAngle, outerRadius, percent, index } = props
    if (!formatted[index]) return null // 🧩 safety check

    const RADIAN = Math.PI / 180
    const radius = outerRadius * 1.35
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)
    const percentText = (percent * 100).toFixed(2)
    const color = colors[index % colors.length]
    const name = formatted[index]?.name || "Unknown"

    return (
      <text
        x={x}
        y={y}
        fill={color}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize={12}
        fontWeight="500"
      >
        {name}: {percentText}%
      </text>
    )
  }

  return (
    <div className="w-full lg:w-1/2">
      <p className="font-semibold text-gray-700 mb-2 text-center">{title}</p>
      <ResponsiveContainer width="100%" height={360}>
        <PieChart>
          <Pie
            data={formatted}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={110}
            labelLine={{ stroke: "#8884d8", strokeWidth: 1, cursor: "pointer" }}
            label={renderCustomLabel}
          >
            {formatted.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
                cursor="pointer"
              />
            ))}
          </Pie>
          <Tooltip formatter={v => currency(v)} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}


