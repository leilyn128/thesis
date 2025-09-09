"use client"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"

export default function ProtectedLayout({ children }) {
  const pathname = usePathname()
  const router = useRouter()

  // 🔒 Protect routes
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      router.push("/auth")
    }
  }, [router])

  const links = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/transactions", label: "Transactions" },
    { href: "/reports", label: "Reports" },
    { href: "/settings", label: "Settings" },
  ]

  const handleLogout = () => {
    localStorage.removeItem("token")
    router.push("/auth")
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 space-y-6">
        {/* ✅ Logo with title */}
        <div className="flex flex-col items-center space-y-2">
          <img
            src="/logo.jpg"
            alt="BTMS Logo"
            className="w-24 h-24 object-contain"
          />
          <h1 className="text-xl font-bold text-green-700">FUNDCAST</h1>

        </div>

        <nav className="space-y-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`block px-3 py-2 rounded-md transition ${
                pathname === link.href
                  ? "bg-green-100 text-green-700 font-semibold"
                  : "text-gray-700 hover:bg-gray-100 hover:text-green-600"
              }`}
            >
              {pathname === link.href ? "▸ " : ""}
              {link.label}
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

      {/* Main content */}
      <main className="flex-1 p-6 space-y-6">{children}</main>
    </div>
  )
}
