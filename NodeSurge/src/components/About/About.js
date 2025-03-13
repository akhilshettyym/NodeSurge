"use client"

import { useState, useEffect } from "react"
import "./About.css"

export default function About(props) {
  const [darkMode, setDarkMode] = useState(props.mode === "dark")

  // Update darkMode state when props.mode changes
  useEffect(() => {
    setDarkMode(props.mode === "dark")
  }, [props.mode])

  const toggleStyle = () => {
    setDarkMode(!darkMode)
  }

  const myStyle = {
    color: darkMode ? "white" : "black",
    backgroundColor: darkMode ? "#121212" : "#f9f9f9",
    border: `1px solid ${darkMode ? "#444" : "#ddd"}`,
    padding: "15px",
    borderRadius: "10px",
    transition: "all 0.3s ease",
  }

  return (
    <div className={`container ${darkMode ? "dark-mode" : ""}`} style={myStyle}>
      <h2 className="my-3">🚀 About Our Multi-Utility Website</h2>
      <p>
        Welcome to our multi-utility website — a single platform offering multiple helpful tools designed to make your
        daily tasks easier and more efficient. Below is a detailed overview of the four key apps integrated into our
        platform:
      </p>

      {/* ProReact Section */}
      <div className="accordion my-2" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#proReact"
              aria-expanded="true"
              aria-controls="proReact"
            >
              📝 ProReact — Text Utility App
            </button>
          </h2>
          <div id="proReact" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>ProReact</strong> is a powerful text utility tool that allows users to effortlessly manage text
              with the following features:
              <ul>
                <li>
                  Convert text to <strong>UPPERCASE</strong> or <strong>lowercase</strong>
                </li>
                <li>Remove extra spaces and clean up the text</li>
                <li>Replace specific text strings easily</li>
                <li>Real-time word and letter count</li>
                <li>
                  Estimate the <strong>reading time</strong>
                </li>
                <li>Preview the formatted text instantly</li>
              </ul>
              🚀 Perfect for bloggers, writers, and content creators!
            </div>
          </div>
        </div>

        {/* ChatNest Section */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#chatNest"
              aria-expanded="false"
              aria-controls="chatNest"
            >
              🤖 ChatNest — AI Chatbot
            </button>
          </h2>
          <div id="chatNest" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>ChatNest</strong> is an AI-powered chatbot built using the Gemini model. It can:
              <ul>
                <li>Answer any question in real-time</li>
                <li>Provide smart, contextual, and accurate responses</li>
                <li>Assist with research, code suggestions, and more</li>
                <li>Engage in casual conversation and professional queries alike</li>
              </ul>
              💡 Just type in your question, and ChatNest will have the answer!
            </div>
          </div>
        </div>

        {/* To-Do Manager Section */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#toDoManager"
              aria-expanded="false"
              aria-controls="toDoManager"
            >
              ✅ To-Do-Manager — Task Organizer
            </button>
          </h2>
          <div id="toDoManager" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              The <strong>To-Do Manager</strong> is a simple yet effective tool to manage your daily tasks:
              <ul>
                <li>Create, update, and delete tasks</li>
                <li>Mark tasks as completed or pending</li>
                <li>Keep track of your daily progress</li>
                <li>Clean and user-friendly interface</li>
              </ul>
              📅 Stay organized and productive every day!
            </div>
          </div>
        </div>

        {/* Weather App Section */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#weatherApp"
              aria-expanded="false"
              aria-controls="weatherApp"
            >
              🌦️ Weather App — Real-time Weather Information
            </button>
          </h2>
          <div id="weatherApp" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              The <strong>Weather App</strong> gives you real-time weather updates:
              <ul>
                <li>Enter your location to get accurate weather details</li>
                <li>Shows current temperature, humidity, and wind speed</li>
                <li>Provides weather conditions like cloudy, rainy, or sunny</li>
                <li>
                  Example:
                  <div
                    style={{
                      backgroundColor: darkMode ? "#1c1c1c" : "#e0e0e0",
                      padding: "10px",
                      borderRadius: "5px",
                      marginTop: "10px",
                    }}
                  >
                    📍 Location: <strong>Goa</strong>
                    <br />
                    🌡️ 24°C — Scattered Clouds
                    <br />
                    🌡️ Feels like: 24°C
                    <br />💧 Humidity: 65%
                    <br />
                    🌬️ Wind Speed: 1.06 km/h
                  </div>
                </li>
              </ul>
              🌍 Plan your day with precise weather information!
            </div>
          </div>
        </div>
      </div>

      {/* Dark Mode Toggle Button */}
      <button className={`btn ${darkMode ? "btn-light" : "btn-dark"} my-3`} onClick={toggleStyle}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  )
}