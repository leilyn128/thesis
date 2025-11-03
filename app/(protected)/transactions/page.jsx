"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "../../../lib/supabaseClient";
import * as XLSX from "xlsx";

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [exportLoading, setExportLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    type: "Income",
    category: "",
    amount: "",
    date: "",
    remarks: "",
  });

  const [editData, setEditData] = useState(null); // ✅ for editing
  const [exportType, setExportType] = useState("both");
  const [exportMonth, setExportMonth] = useState("all");

  // ✅ Fetch transactions
  const fetchTransactions = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("transactions")
      .select("*")
      .order("date", { ascending: false });
    if (error) console.error("❌ Error fetching:", error.message);
    else setTransactions(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // ✅ Add transaction
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTransaction = { ...formData, amount: Number(formData.amount) };
    const { error } = await supabase.from("transactions").insert([newTransaction]);
    if (error) console.error("❌ Error inserting:", error.message);
    else {
      fetchTransactions();
      setFormData({ type: "Income", category: "", amount: "", date: "", remarks: "" });
    }
  };

  // ✅ Edit transaction
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("transactions")
      .update({
        type: editData.type,
        category: editData.category,
        amount: Number(editData.amount),
        date: editData.date,
        remarks: editData.remarks,
      })
      .eq("id", editData.id);

    if (error) setMessage("❌ Update failed: " + error.message);
    else {
      setMessage("✅ Transaction updated successfully!");
      setEditData(null);
      fetchTransactions();
    }
  };

  // ✅ Delete transaction
 const handleDelete = async (id) => {
  if (!id) {
    console.error("❌ No ID provided for deletion");
    setMessage("❌ Error: Missing transaction ID.");
    return;
  }

  if (!confirm("Are you sure you want to delete this transaction?")) return;

  try {
    const { error } = await supabase
      .from("transactions")
      .delete()
      .eq("id", id);

    if (error) throw error;

    setTransactions((prev) => prev.filter((t) => t.id !== id));
    setMessage("✅ Transaction deleted successfully!");
  } catch (err) {
    console.error("❌ Delete error:", err.message);
    setMessage("❌ Failed to delete transaction: " + err.message);
  }
};

 const handleExportExcel = async () => {
  setExportLoading(true);
  setMessage("");

  // 🧠 Use already-fetched local data
  let data = [...transactions];

  if (!data.length) {
    setMessage("⚠️ No transactions available to export.");
    setExportLoading(false);
    return;
  }

  // ✅ Filter by type
  if (exportType !== "both") {
    data = data.filter(
      (t) => t.type === (exportType === "Income" ? "Income" : "Expense")
    );
  }

  // ✅ Filter by month
  if (exportMonth !== "all") {
    data = data.filter((t) => {
      if (!t.date) return false;
      const month = new Date(t.date).getMonth() + 1;
      return month === parseInt(exportMonth);
    });
  }

  if (!data.length) {
    setMessage("⚠️ No records found for those filters.");
    setExportLoading(false);
    return;
  }

  // 💰 Format amounts
  const formattedData = data.map((t) => ({
    ...t,
    amount: `₱${Number(t.amount).toLocaleString("en-PH", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`,
  }));

  // 📘 Export to Excel
  const worksheet = XLSX.utils.json_to_sheet(formattedData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");

  const monthNames = [
    "AllMonths",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthLabel =
    exportMonth === "all" ? "AllMonths" : monthNames[parseInt(exportMonth)];
  const typeLabel = exportType === "both" ? "All" : exportType;

  const fileName = `transactions_${typeLabel}_${monthLabel}.xlsx`;
  XLSX.writeFile(workbook, fileName);

  setExportLoading(false);
  setMessage(`✅ Exported ${data.length} records to ${fileName}`);
};


  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Transactions</h2>
      <p className="text-sm text-gray-500">
        Record, manage, edit, and export barangay financial transactions.
      </p>

      {/* ✅ Add Transaction Form */}
      <Card>
        <CardContent className="p-4">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-5 gap-4"
          >
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

      {/* ✅ Export Options */}
      <Card>
        <CardContent className="p-4 space-y-4">
          <h3 className="text-lg font-semibold mb-2">Export Transactions</h3>
          <div className="flex flex-wrap gap-4">
            <select
              value={exportType}
              onChange={(e) => setExportType(e.target.value)}
              className="border p-2 rounded-lg"
            >
              <option value="both">All (Income + Expenses)</option>
              <option value="Income">Income</option>
              <option value="Expense">Expenses</option>
            </select>
            <select
              value={exportMonth}
              onChange={(e) => setExportMonth(e.target.value)}
              className="border p-2 rounded-lg"
            >
              <option value="all">All Months</option>
              {[...Array(12)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {new Date(0, i).toLocaleString("default", { month: "long" })}
                </option>
              ))}
            </select>
            <button
              onClick={handleExportExcel}
              disabled={exportLoading}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
            >
              {exportLoading ? "Exporting..." : "Export to Excel"}
            </button>
          </div>
          {message && <p className="text-sm text-gray-600">{message}</p>}
        </CardContent>
      </Card>

      {/* ✅ Table with Edit/Delete */}
      <Card>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-4">Transaction Records</h3>
          {loading ? (
            <p>Loading...</p>
          ) : transactions.length === 0 ? (
            <p className="text-gray-500 italic">No transactions found.</p>
          ) : (
            <table className="min-w-full border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border px-4 py-2 text-left">Date</th>
                  <th className="border px-4 py-2 text-left">Type</th>
                  <th className="border px-4 py-2 text-left">Category</th>
                  <th className="border px-4 py-2 text-right">Amount (₱)</th>
                  <th className="border px-4 py-2 text-left">Remarks</th>
                  <th className="border px-4 py-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t) =>
                  editData?.id === t.id ? (
                    <tr key={t.id} className="bg-yellow-50">
                      <td className="border px-4 py-2">
                        <input
                          type="date"
                          value={editData.date}
                          onChange={(e) =>
                            setEditData({ ...editData, date: e.target.value })
                          }
                          className="border p-1 rounded w-full"
                        />
                      </td>
                      <td className="border px-4 py-2">
                        <select
                          value={editData.type}
                          onChange={(e) =>
                            setEditData({ ...editData, type: e.target.value })
                          }
                          className="border p-1 rounded w-full"
                        >
                          <option value="Income">Income</option>
                          <option value="Expense">Expense</option>
                        </select>
                      </td>
                      <td className="border px-4 py-2">
                        <input
                          type="text"
                          value={editData.category}
                          onChange={(e) =>
                            setEditData({ ...editData, category: e.target.value })
                          }
                          className="border p-1 rounded w-full"
                        />
                      </td>
                      <td className="border px-4 py-2 text-right">
                        <input
                          type="number"
                          value={editData.amount}
                          onChange={(e) =>
                            setEditData({ ...editData, amount: e.target.value })
                          }
                          className="border p-1 rounded w-full text-right"
                        />
                      </td>
                      <td className="border px-4 py-2">
                        <input
                          type="text"
                          value={editData.remarks || ""}
                          onChange={(e) =>
                            setEditData({ ...editData, remarks: e.target.value })
                          }
                          className="border p-1 rounded w-full"
                        />
                      </td>
                      <td className="border px-4 py-2 text-center space-x-2">
                        <button
                          onClick={handleEditSubmit}
                          className="bg-green-600 text-white px-2 py-1 rounded"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditData(null)}
                          className="bg-gray-400 text-white px-2 py-1 rounded"
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  ) : (
                    <tr key={t.id} className="hover:bg-gray-50">
                      <td className="border px-4 py-2">{t.date}</td>
                      <td className="border px-4 py-2">{t.type}</td>
                      <td className="border px-4 py-2">{t.category}</td>
                      <td className="border px-4 py-2 text-right">
                        ₱
                        {Number(t.amount).toLocaleString("en-PH", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="border px-4 py-2">{t.remarks}</td>
                      <td className="border px-4 py-2 text-center space-x-2">
                        <button
                          onClick={() => setEditData(t)}
                          className="bg-blue-500 text-white px-2 py-1 rounded"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(t.id)}
                          className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
