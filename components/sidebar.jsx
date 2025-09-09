"use client"
import { usePathname, useRouter } from "next/navigation"

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("token")
    router.push("/auth")
  }

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Transactions", path: "/transactions" },
    { name: "Reports", path: "/reports" },
    { name: "Settings", path: "/settings" },
  ]

  return (
    <aside className="w-64 bg-white shadow-lg p-6 space-y-6">
      <h1 className="text-xl font-bold text-green-700">BTMS Dashboard</h1>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className={`block px-3 py-2 rounded-md transition ${
              pathname === item.path
                ? "bg-green-100 text-green-700 font-semibold"
                : "text-gray-700 hover:bg-gray-100 hover:text-green-600"
            }`}
          >
            {item.name}
          </a>
        ))}
      </nav>

      <button
        onClick={handleLogout}
        className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
      >
        Logout
      </button>
    </aside>
  )
}
