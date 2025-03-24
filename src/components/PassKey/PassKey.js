"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import "../../styles/Passkey.css"

function PassKey({ mode }) {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+`~-=[]{}|;:,.<>?/"

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length)
      pass += str.charAt(charIndex)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select()
      passwordRef.current.setSelectionRange(0, 100)
      window.navigator.clipboard.writeText(password)
    }
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div
      className="passkey-container"
      style={{
        backgroundColor: mode === "dark" ? "#181818" : "white",
        color: mode === "dark" ? "white" : "black",
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        className="card"
        style={{
          backgroundColor: mode === "dark" ? "#1E2938" : "white",
          border: mode === "dark" ? "none" : "1px solid #ddd",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <h2 className="title" style={{ color: mode === "dark" ? "#ff8c00" : "#ff8c00" }}>
          Password Generator
        </h2>
        <div
          className="input-container"
          style={{
            backgroundColor: mode === "dark" ? "#364153" : "#f5f5f5",
          }}
        >
          <input
            type="text"
            value={password}
            className="password-input"
            readOnly
            ref={passwordRef}
            style={{ color: mode === "dark" ? "white" : "black" }}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="copy-button"
            style={{
              backgroundColor: mode === "dark" ? "#4A5568" : "#4A5568",
              color: "white",
            }}
          >
            Copy
          </button>
        </div>
        <div className="controls">
          <div className="slider-checkbox-container">
            <div className="slider-container">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="slider"
                onChange={(e) => setLength(Number.parseInt(e.target.value, 10))}
              />
              <span className="label" style={{ color: mode === "dark" ? "#ff8c00" : "#ff8c00" }}>
                Length: {length}
              </span>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                checked={numberAllowed}
                id="numberInput"
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label htmlFor="numberInput" style={{ color: mode === "dark" ? "white" : "black" }}>
                Numbers
              </label>
              <input
                type="checkbox"
                checked={charAllowed}
                id="characterInput"
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label htmlFor="characterInput" style={{ color: mode === "dark" ? "white" : "black" }}>
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PassKey;