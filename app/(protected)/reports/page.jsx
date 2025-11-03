"use client"
import { useEffect, useState } from "react"
import { supabase } from "../../../lib/supabaseClient"
import * as XLSX from "xlsx"

export default function ReportsPage() {
  const [files, setFiles] = useState([])
  const [selectedFile, setSelectedFile] = useState("")
  const [trialBalance, setTrialBalance] = useState([])
  const [breakdown, setBreakdown] = useState([]) // ✅ new barangay_budget_breakdown
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [selectedYear, setSelectedYear] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // ✅ Fetch imported files
  useEffect(() => {
    const fetchFiles = async () => {
      const { data, error } = await supabase.storage.from("imports").list("", { limit: 100 })
      if (error) {
        console.error("Error fetching imports:", error)
        setMessage("❌ Failed to load imported files.")
        return
      }

      const excelFiles = data.filter(f => f.name.endsWith(".xlsx") || f.name.endsWith(".csv"))
      const filesWithOriginalName = excelFiles.map(f => {
        const parts = f.name.split("_")
        const originalName = parts.slice(2).join("_")
        return { storageName: f.name, displayName: originalName }
      })

      setFiles(filesWithOriginalName)
    }

    fetchFiles()
    fetchBreakdown()
  }, [])

  // ✅ Fetch barangay_budget_breakdown from Supabase
  const fetchBreakdown = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from("barangay_budget_breakdown")
      .select("*")
      .order("year", { ascending: true })

    if (error) {
      console.error("Error fetching breakdown:", error)
      setMessage("❌ Failed to load budget breakdown.")
      setLoading(false)
      return
    }

    setBreakdown(data || [])
    setLoading(false)
  }



  // ✅ Get filtered data
  const filteredData = breakdown.filter((row) => {
    const matchYear = selectedYear === "all" || row.year === Number(selectedYear)
    const matchCategory = selectedCategory === "all" || row.category === selectedCategory
    return matchYear && matchCategory
  })

  // ✅ Extract unique years and categories
  const years = Array.from(new Set(breakdown.map((b) => b.year))).sort((a, b) => b - a)
  const categories = Array.from(new Set(breakdown.map((b) => b.category)))

  const totalAmount = filteredData.reduce((sum, r) => sum + Number(r.amount || 0), 0)

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold text-green-700">📊 Reports</h1>

      

      {/* =================== BARANGAY BUDGET BREAKDOWN =================== */}
      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">🏛 Barangay Budget Breakdown</h2>

        <div className="flex flex-wrap gap-4 items-center">
          <div>
            <label className="text-sm text-gray-600 mr-2">Year:</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
            >
              <option value="all">All</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-600 mr-2">Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
            >
              <option value="all">All</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : filteredData.length === 0 ? (
          <p className="text-gray-500 italic">No data available for selected filters.</p>
        ) : (
          <div className="overflow-x-auto border rounded-lg mt-4">
            <table className="min-w-full border-collapse text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2 text-left">Year</th>
                  <th className="border px-4 py-2 text-left">Category</th>
                  <th className="border px-4 py-2 text-left">Subcategory</th>
                  <th className="border px-4 py-2 text-left">Description</th>
                  <th className="border px-4 py-2 text-right">Amount (₱)</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50">
                    <td className="border px-4 py-2">{row.year}</td>
                    <td className="border px-4 py-2">{row.category}</td>
                    <td className="border px-4 py-2">{row.subcategory}</td>
                    <td className="border px-4 py-2">{row.description}</td>
                    <td className="border px-4 py-2 text-right">
                      ₱
                      {Number(row.amount).toLocaleString("en-PH", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                  </tr>
                ))}
                <tr className="bg-green-50 font-semibold">
                  <td colSpan="4" className="border px-4 py-2 text-right">
                    TOTAL:
                  </td>
                  <td className="border px-4 py-2 text-right">
                    ₱
                    {totalAmount.toLocaleString("en-PH", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
