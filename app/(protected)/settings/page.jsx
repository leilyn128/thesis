"use client"
import { useState } from "react"

export default function AccountSettingsPage() {
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleChangePassword = async (e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem("token")
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/accounts/change-password/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
          body: JSON.stringify({
            old_password: oldPassword,
            new_password: newPassword,
          }),
        }
      )

      const data = await response.json()
      if (response.ok) {
        setMessage("✅ Password updated successfully")
        setOldPassword("")
        setNewPassword("")
      } else {
        setMessage(`❌ ${data.error || "Something went wrong"}`)
      }
    } catch (err) {
      setMessage("❌ Server error")
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800">Account Settings</h1>
      <p className="text-gray-600 mt-2">Update your password here.</p>

      <form onSubmit={handleChangePassword} className="mt-6 space-y-4 max-w-md">
        <div>
          <label className="block text-sm font-medium text-gray-700">Old Password</label>
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Change Password
        </button>
      </form>

      {message && <p className="mt-4 text-sm">{message}</p>}
    </div>
  )
}
