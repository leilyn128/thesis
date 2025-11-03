"use client"

import { useState } from "react"
import { supabase } from "../../../lib/supabaseClient"
import * as XLSX from "xlsx"

export default function SettingsPage() {
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [previewData, setPreviewData] = useState([]) // 👈 for displaying uploaded file contents

  // ✅ Change password
  const handleChangePassword = async (e) => {
    e.preventDefault()
    setMessage("")
    if (newPassword !== confirmPassword) {
      setMessage("❌ New passwords do not match.")
      return
    }

    const { data: { user }, error: userError } = await supabase.auth.getUser()
    if (userError || !user) {
      setMessage("⚠️ User not found. Please log in again.")
      return
    }

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: oldPassword,
    })
    if (signInError) {
      setMessage("❌ Old password is incorrect.")
      return
    }

    const { error } = await supabase.auth.updateUser({ password: newPassword })
    if (error) setMessage("❌ " + error.message)
    else setMessage("✅ Password updated successfully!")

    setOldPassword("")
    setNewPassword("")
    setConfirmPassword("")
  }

  // ✅ Export data as CSV
// ✅ Export data as Excel (.xlsx)
const handleExportExcel = async () => {
  setLoading(true)
  setMessage("")
  const { data, error } = await supabase.from("transactions").select("*")
  setLoading(false)

  if (error) {
    setMessage("❌ Failed to export data: " + error.message)
    return
  }

  if (!data || data.length === 0) {
    setMessage("⚠️ No data available to export.")
    return
  }

  // ✅ Format amount to show ₱ and two decimal places
  const formattedData = data.map((t) => ({
    Date: t.date,
    Type: t.type,
    Category: t.category,
    Amount: `₱ ${Number(t.amount).toLocaleString("en-PH", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`,
    Remarks: t.remarks || "",
  }))

  // ✅ Create Excel sheet
  const worksheet = XLSX.utils.json_to_sheet(formattedData)
  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions")

  // ✅ Generate filename like "transactions_2025-10-22.xlsx"
  const today = new Date().toISOString().split("T")[0]
  const filename = `transactions_${today}.xlsx`

  // ✅ Save Excel file
  XLSX.writeFile(workbook, filename)

  setMessage("✅ Transactions exported to Excel successfully!")
}

const handleImportExcel = async (e) => {
  const file = e.target.files[0]
  if (!file) return

  const fileExt = file.name.split(".").pop()
  const timestamp = Date.now()
  const storageFileName = `import_${timestamp}_${file.name}` // unique storage name

  setLoading(true)
  setMessage("Uploading file...")

  // Step 1️⃣ Upload to Supabase Storage
  const { error: uploadError } = await supabase.storage
    .from("imports")
    .upload(storageFileName, file, { upsert: false }) // do NOT overwrite

  if (uploadError) {
    setMessage("❌ Upload failed: " + uploadError.message)
    setLoading(false)
    return
  }

  // Step 2️⃣ Get public URL
  const { data: publicData } = supabase.storage.from("imports").getPublicUrl(storageFileName)
  const fileUrl = publicData.publicUrl

  // Step 3️⃣ Parse Excel file
  try {
    const response = await fetch(fileUrl)
    const arrayBuffer = await response.arrayBuffer()
    const workbook = XLSX.read(arrayBuffer, { type: "array" })
    const sheet = workbook.Sheets[workbook.SheetNames[0]]
    const jsonData = XLSX.utils.sheet_to_json(sheet)

    // Step 4️⃣ Normalize data
    const normalizedData = jsonData.map((row) => ({
      account_name: row["Account Name"] || row["account_name"] || "",
      debit: row["Debit"] || row["debit"] || 0,
      credit: row["Credit"] || row["credit"] || 0,
    }))

    setPreviewData(normalizedData)
    setMessage("✅ File uploaded successfully!")

    // Step 5️⃣ Determine Year
    const detectedYear = file.name.match(/20\d{2}/)?.[0] || new Date().getFullYear()

    // Step 6️⃣ Insert into trial_balance
    const formattedData = normalizedData.map((row) => ({
      ...row,
      year: detectedYear,
    }))

    const { error: insertError } = await supabase
      .from("trial_balance")
      .insert(formattedData)

    if (insertError) {
      console.error(insertError)
      setMessage("❌ Failed to insert into trial_balance: " + insertError.message)
    } else {
      setMessage(`✅ Imported ${formattedData.length} rows into trial_balance (${detectedYear})`)
    }
  } catch (err) {
    console.error(err)
    setMessage("❌ Failed to read Excel file.")
  }

  setLoading(false)
}


  return (
    <div className="p-6 space-y-6 ">
      <h1 className="text-3xl font-bold mb-8 text-green-700">⚙️ Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 👤 Account Settings */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">👤 Account Settings</h2>

          <form onSubmit={handleChangePassword} className="space-y-4">
            <div>
              <label className="block text-sm mb-2 font-medium">Old Password</label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 font-medium">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 font-medium">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50"
            >
              {loading ? "Processing..." : "Change Password"}
            </button>
          </form>
        </div>

      {/* 📂 Data Management */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">📂 Data Management</h2>

          <div className="space-y-4">
            <button
               onClick={handleExportExcel}
               disabled={loading}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
              >
                {loading ? "Exporting..." : "📤 Export Transactions (Excel)"}
              </button>


            <label className="w-full block">
              <div className="bg-yellow-500 text-white py-2 text-center rounded-lg hover:bg-yellow-600 transition cursor-pointer">
                📥 Import Data (Excel)
              </div>
              <input
                type="file"
                accept=".xlsx,.csv"
                onChange={handleImportExcel}
                className="hidden"
              />
            </label>
          </div>

          <p className="text-xs text-gray-500 mt-3">
            Files are uploaded to your Supabase "imports" storage bucket.
          </p>
        </div>
      </div>

      {message && (
        <p
          className={`mt-6 text-sm ${
            message.startsWith("✅")
              ? "text-green-600"
              : message.startsWith("⚠️")
              ? "text-yellow-600"
              : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}

    </div>
  )
}
