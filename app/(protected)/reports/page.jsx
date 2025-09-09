"use client"
import { useState } from "react"

export default function ReportsPage() {
  const [reportType, setReportType] = useState("monthly")
  const [message, setMessage] = useState("")

  const handleGenerateReport = async (format) => {
    try {
      const token = localStorage.getItem("token")

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/reports/generate/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
          body: JSON.stringify({ type: reportType, format }),
        }
      )

      if (!response.ok) throw new Error("Failed to generate report")

      // Blob download (PDF/Excel/Word)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `FUNDCAST_${reportType}_report.${format}`
      document.body.appendChild(a)
      a.click()
      a.remove()
      window.URL.revokeObjectURL(url)

      setMessage(`✅ ${reportType} report exported to ${format.toUpperCase()}`)
    } catch (error) {
      setMessage("❌ Error generating report")
    }
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-green-700">📊 Report Generation</h1>
      <p className="text-gray-600">
        Generate automatic financial reports following <b>RA 7160</b> (Local Government Code) 
        and <b>RA 9184</b> (Procurement Law).
      </p>

      <div className="shadow-md bg-white rounded-lg p-6 space-y-4">
        {/* Select Report Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Report Type:
          </label>
          <select
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="monthly">📅 Monthly Report</option>
            <option value="quarterly">📊 Quarterly Report</option>
            <option value="annual">📆 Annual Report</option>
          </select>
        </div>

        {/* Export Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={() => handleGenerateReport("pdf")}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
          >
            Export to PDF
          </button>
          <button
            onClick={() => handleGenerateReport("xlsx")}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
          >
            Export to Excel
          </button>
          <button
            onClick={() => handleGenerateReport("docx")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Export to Word
          </button>
        </div>

        {/* Message */}
        {message && <p className="text-sm mt-2">{message}</p>}
      </div>
    </div>
  )
}
