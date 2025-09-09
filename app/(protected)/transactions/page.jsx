"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState([
    { id: 1, type: "Income", category: "Taxes", amount: 5000, date: "2025-09-08", remarks: "Business Permit" },
    { id: 2, type: "Expense", category: "Infrastructure", amount: 2000, date: "2025-09-07", remarks: "Streetlights" },
  ])

  const [formData, setFormData] = useState({
    type: "Income",
    category: "",
    amount: "",
    date: "",
    remarks: "",
  })

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault()
    const newTransaction = {
      id: transactions.length + 1,
      ...formData,
      amount: Number(formData.amount),
    }
    setTransactions([...transactions, newTransaction])
    setFormData({ type: "Income", category: "", amount: "", date: "", remarks: "" })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Transactions</h2>
      <p className="text-sm text-gray-500">Record and manage barangay financial transactions</p>

      {/* Transaction Entry Form */}
      <Card>
        <CardContent className="p-4">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="border p-2 rounded-lg"
            >
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
              className="border p-2 rounded-lg"
              required
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleChange}
              className="border p-2 rounded-lg"
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="border p-2 rounded-lg"
              required
            />
            <input
              type="text"
              name="remarks"
              placeholder="Remarks"
              value={formData.remarks}
              onChange={handleChange}
              className="border p-2 rounded-lg"
            />
            <button
              type="submit"
              className="md:col-span-5 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
            >
              Add Transaction
            </button>
          </form>
        </CardContent>
      </Card>

      {/* Transaction Table */}
      <Card>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-4">Transaction Records</h3>
          <table className="min-w-full border border-gray-200 text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="border px-4 py-2 text-left">Date</th>
                <th className="border px-4 py-2 text-left">Type</th>
                <th className="border px-4 py-2 text-left">Category</th>
                <th className="border px-4 py-2 text-right">Amount (₱)</th>
                <th className="border px-4 py-2 text-left">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id}>
                  <td className="border px-4 py-2">{t.date}</td>
                  <td className="border px-4 py-2">{t.type}</td>
                  <td className="border px-4 py-2">{t.category}</td>
                  <td className="border px-4 py-2 text-right">{t.amount.toLocaleString()}</td>
                  <td className="border px-4 py-2">{t.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}
