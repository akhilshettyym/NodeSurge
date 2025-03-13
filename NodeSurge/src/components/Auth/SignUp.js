"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

export default function SignUp({ mode }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { signup } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate form
    if (password !== confirmPassword) {
      return setError("Passwords do not match")
    }

    if (password.length < 6) {
      return setError("Password must be at least 6 characters")
    }

    try {
      setError("")
      setIsLoading(true)
      await signup(email, password)
      navigate("/home")
    } catch (err) {
      setError("Failed to create an account: " + err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      className={`min-vh-100 d-flex align-items-center justify-content-center px-4 ${mode === "dark" ? "bg-dark text-white" : "bg-light text-dark"}`}
    >
      <div
        className={`card shadow-lg p-4 ${mode === "dark" ? "bg-dark text-white border-secondary" : ""}`}
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="card-title text-center mb-4">Sign Up</h2>
        <p className="text-center text-muted mb-4">Create your account to get started</p>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              className={`form-control ${mode === "dark" ? "bg-dark text-white border-secondary" : ""}`}
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              className={`form-control ${mode === "dark" ? "bg-dark text-white border-secondary" : ""}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              className={`form-control ${mode === "dark" ? "bg-dark text-white border-secondary" : ""}`}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={isLoading} className="btn btn-primary w-100 py-2">
            {isLoading ? "Creating account..." : "Sign Up"}
          </button>
          <p className="text-center mt-3 mb-0">
            Already have an account?{" "}
            <Link to="/login" className="text-decoration-none text-primary">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}