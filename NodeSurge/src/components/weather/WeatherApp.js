"use client"

import { useState } from "react"
import axios from "axios"
import "../../styles/weather.css"

export default function WeatherApp({ mode }) {
  const [data, setData] = useState(null) // Setting to null initially to hide details
  const [location, setLocation] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const apiKey = "d4b93c3c8e14d3568b13df597f90ce97"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`

  const searchLocation = async (event) => {
    if (event.key === "Enter" && location.trim() !== "") {
      setLoading(true)
      setError(null)
      try {
        const response = await axios.get(url)
        setData(response.data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching weather data:", error)
        setData(null)
        setError("Location not found. Please try again.")
        setLoading(false)
      }
    }
  }

  return (
    <div className={`weather-app ${mode === "dark" ? "dark-mode" : ""}`}>
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter Location"
          type="text"
          style={{
            backgroundColor: mode === "dark" ? "rgba(40, 40, 40, 0.7)" : "rgba(255, 255, 255, 0.1)",
            color: mode === "dark" ? "white" : "white",
          }}
        />
      </div>

      {loading && <div className="loading">Loading...</div>}

      {error && <div className="error">{error}</div>}

      {data && (
        <div className="weather-container">
          <div className="top">
            <div className="location">
              <p style={{ color: '#fff', fontSize: '50px' }}>Location: {data.name}</p>
            </div>

            <div className="temp">
              <h1>{Math.round(data.main.temp)}°C</h1>
            </div>

            <div className="description">
              <p style={{ color: '#fff' }}>{data.weather[0].description}</p>
            </div>
          </div>

          <div
            className="bottom"
            style={{
              backgroundColor: mode === "dark" ? "rgba(40, 40, 40, 0.7)" : "rgba(255, 255, 255, 0.2)",
            }}
          >
            <div className="feels">
              <p className="bold">{Math.round(data.main.feels_like)}°C</p>
              <p style={{ color: '#fff' }}>Feels like</p>
            </div>

            <div className="humidity">
              <p className="bold">{data.main.humidity}%</p>
              <p style={{ color: '#fff' }}>Humidity</p>
            </div>

            <div className="wind">
              <p className="bold">{data.wind.speed} km/h</p>
              <p style={{ color: '#fff' }}>Wind Speed</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}