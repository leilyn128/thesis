"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "../../lib/supabaseClient"
import LoginLayout from "../../components/layouts/authlayout"

export default function LoginPage() {
  const [email, setEmail] = useState("") // user must type this manually
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [isSignup, setIsSignup] = useState(false)
  const router = useRouter()

  const DEFAULT_EMAIL = "treasurer@gmail.com" // ✅ fixed required email

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      // ✅ only allow if email matches default
      if (email.trim().toLowerCase() !== DEFAULT_EMAIL.toLowerCase()) {
        setError(`Only the email "${DEFAULT_EMAIL}" is allowed.`)
        setLoading(false)
        return
      }

      let data, error

      if (isSignup) {
        // 🔥 Signup
        const result = await supabase.auth.signUp({
          email,
          password,
        })
        data = result.data
        error = result.error

        if (error) throw error

        alert("Signup successful!")
        setIsSignup(false)
        setPassword("")
        setEmail("")
      } else {
        // 🔑 Login
        const result = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        data = result.data
        error = result.error

        if (error) throw error

        if (data.session) {
          localStorage.setItem("token", data.session.access_token)
          router.push("/dashboard")
        }
      }
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <LoginLayout>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
          <h1 className="text-3xl font-bold mb-6 text-center text-green-600">
            {isSignup ? "Create Treasurer Account" : "Welcome Treasurer!"}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder={isSignup ? "Create a password" : "Enter your password"}
              />
            </div>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-500 text-white py-3 rounded-lg text-lg font-medium hover:bg-green-600 transition disabled:opacity-50"
            >
              {loading
                ? isSignup
                  ? "Signing up..."
                  : "Logging in..."
                : isSignup
                ? "Sign Up"
                : "Login"}
            </button>
          </form>

          {/* Toggle Signup/Login */}
          <p className="text-sm text-center mt-4">
            {isSignup ? "Already have an account?" : "No account yet?"}{" "}
            <button
              onClick={() => {
                setIsSignup(!isSignup)
                setError("")
                setPassword("")
                setEmail("")
              }}
              className="text-green-600 font-medium hover:underline"
            >
              {isSignup ? "Login here" : "Sign up"}
            </button>
          </p>
        </div>
      </div>
    </LoginLayout>
  )
}
