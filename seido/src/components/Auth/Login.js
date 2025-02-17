"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Add authentication logic here
    setTimeout(() => {
      navigate("/home")
    }, 1000)
  }

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center px-4">
      <div className="card shadow-lg p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="card-title text-center mb-4">Login</h2>
        <p className="text-center text-muted mb-4">Enter your credentials to access your account</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              id="password"
              type="password"
              className="form-control"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="btn btn-primary w-100 py-2"
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
          <p className="text-center mt-3 mb-0">
            Don't have an account?{" "}
            <Link to="/signup" className="text-decoration-none text-primary">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}