"use client"

import PropTypes from "prop-types"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import { useState } from "react"

export default function Navbar(props) {
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState("")

  const handleLogout = async () => {
    try {
      setError("")
      await logout()
      navigate("/")
    } catch (err) {
      setError("Failed to log out")
      console.error(err)
    }
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} shadow-sm`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to={currentUser ? "/home" : "/"}>
          NodeSurge
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {currentUser && (
              <li className="nav-item">
                <Link className="nav-link" to="/home" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                  Home
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            {currentUser && (
              <div className="me-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <span className="me-2">Logged in as: {currentUser.email}</span>
                <button onClick={handleLogout} className="btn btn-outline-danger btn-sm">
                  Logout
                </button>
              </div>
            )}

            <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
                style={{ color: props.mode === "dark" ? "white" : "black" }}
              >
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Display Error Message */}
      {error && (
        <div className="alert alert-danger mt-2" role="alert">
          {error}
        </div>
      )}
    </nav>
  )
}

Navbar.propTypes = {
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
}