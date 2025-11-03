"use client"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { supabase } from "../lib/supabaseClient"

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Transactions", path: "/transactions" },
    { name: "Reports", path: "/reports" },
    { name: "Settings", path: "/settings" },
  ]

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error("Logout failed:", error.message)
      return
    }

    // Optional cleanup
    localStorage.removeItem("token")

    // Redirect to login or home
    router.push("/")
  }

  return (
    <aside className="w-64 bg-white shadow-lg p-6 flex flex-col justify-between min-h-screen">
      {/* 🔹 Top Section */}
      <div>
        <h1 className="text-xl font-bold text-green-700 mb-6">
          BTMS Dashboard
        </h1>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block px-3 py-2 rounded-md transition ${
                pathname === item.path
                  ? "bg-green-100 text-green-700 font-semibold"
                  : "text-gray-700 hover:bg-gray-100 hover:text-green-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* 🔻 Bottom Logout Button */}
      <div>
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          🚪 Logout
        </button>
      </div>
    </aside>
  )
}
