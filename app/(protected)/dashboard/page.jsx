"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "../../../components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

// Sample Data (replace with backend/ML output)
const historicalData = [
  { year: "2021", income: 900000, expenses: 700000 },
  { year: "2022", income: 1000000, expenses: 750000 },
  { year: "2023", income: 1100000, expenses: 800000 },
  { year: "2024", income: 1150000, expenses: 850000 },
  { year: "2025", predicted: 1250000 },
]

const categoryBreakdown = [
  { name: "Infrastructure", value: 400000 },
  { name: "Health", value: 250000 },
  { name: "Education", value: 300000 },
  { name: "Salaries", value: 200000 },
  { name: "Other", value: 100000 },
]

const COLORS = ["#4ade80", "#60a5fa", "#facc15", "#f87171", "#a78bfa"]

export default function DashboardPage() {
  const router = useRouter()

  // Protect route
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      router.push("/auth")
    }
  }, [router])

  const lastYearIncome = 1150000
  const nextYearForecast = 1250000
  const lastYearExpenses = 850000
  const growthRate = (
    ((nextYearForecast - lastYearIncome) / lastYearIncome) *
    100
  ).toFixed(2)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Welcome, Treasurer</h2>
        <p className="text-sm text-gray-500">
          Barangay Danahao • Financial Forecasting Overview
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-sm text-gray-500">Forecasted Budget (2025)</h2>
            <p className="text-2xl font-bold text-indigo-600">
              ₱{nextYearForecast.toLocaleString()}
            </p>
            <p className="text-xs text-gray-400">Predicted by ML Model</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="text-sm text-gray-500">Income (2024)</h2>
            <p className="text-2xl font-bold">
              ₱{lastYearIncome.toLocaleString()}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="text-sm text-gray-500">Expenses (2024)</h2>
            <p className="text-2xl font-bold">
              ₱{lastYearExpenses.toLocaleString()}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="text-sm text-gray-500">Growth Rate</h2>
            <p className="text-2xl font-bold text-green-600">{growthRate}%</p>
          </CardContent>
        </Card>
      </div>

      {/* Historical vs Forecast Chart */}
      <div className="bg-white rounded-xl shadow p-4 h-96">
        <h2 className="text-lg font-semibold mb-4">
          Historical vs Forecasted Budget
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={historicalData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="income" stroke="#4ade80" name="Income" />
            <Line type="monotone" dataKey="expenses" stroke="#f87171" name="Expenses" />
            <Line
              type="monotone"
              dataKey="predicted"
              stroke="#6366f1"
              strokeDasharray="5 5"
              name="Forecast"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Forecasted Allocation */}
      <div className="bg-white rounded-xl shadow p-4 h-96">
        <h2 className="text-lg font-semibold mb-4">
          Forecasted Budget Allocation (2025)
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={categoryBreakdown}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label
            >
              {categoryBreakdown.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Forecast Table */}
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold mb-4">
          Forecasted Financial Figures (2025)
        </h2>
        <table className="min-w-full border border-gray-200 text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="border px-4 py-2 text-left">Category</th>
              <th className="border px-4 py-2 text-right">Amount (₱)</th>
            </tr>
          </thead>
          <tbody>
            {categoryBreakdown.map((row, i) => (
              <tr key={i}>
                <td className="border px-4 py-2">{row.name}</td>
                <td className="border px-4 py-2 text-right">
                  {row.value.toLocaleString()}
                </td>
              </tr>
            ))}
            <tr className="font-bold bg-gray-100">
              <td className="border px-4 py-2">Total Forecast</td>
              <td className="border px-4 py-2 text-right">
                ₱{nextYearForecast.toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
