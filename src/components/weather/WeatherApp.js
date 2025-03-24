"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import "../../styles/weather.css"

export default function WeatherApp({ mode }) {
  const [data, setData] = useState(null)
  const [location, setLocation] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [recentSearches, setRecentSearches] = useState(() => {
    const saved = localStorage.getItem("weatherSearches")
    return saved ? JSON.parse(saved) : []
  })

  const apiKey = "d4b93c3c8e14d3568b13df597f90ce97"

  useEffect(() => {
    localStorage.setItem("weatherSearches", JSON.stringify(recentSearches))
  }, [recentSearches])

  const searchLocation = async (event, searchTerm = location) => {
    if ((event && event.key === "Enter" && searchTerm.trim() !== "") || (!event && searchTerm.trim() !== "")) {
      setLoading(true)
      setError(null)
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${apiKey}&units=metric`
        const response = await axios.get(url)
        setData(response.data)

        // Add to recent searches if not already there
        if (!recentSearches.includes(searchTerm)) {
          setRecentSearches((prev) => [searchTerm, ...prev].slice(0, 5))
        }

        setLoading(false)
      } catch (error) {
        console.error("Error fetching weather data:", error)
        setData(null)
        setError("Location not found. Please try again.")
        setLoading(false)
      }
    }
  }

  const handleRecentSearch = (search) => {
    setLocation(search)
    searchLocation(null, search)
  }

  return (
    <div className={`weather-app ${mode === "dark" ? "dark-mode" : ""}`}>
      <div className="search-container">
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
          <button onClick={() => searchLocation(null, location)} className="search-button" disabled={!location.trim()}>
            Search
          </button>
        </div>

        {recentSearches.length > 0 && (
          <div className="recent-searches">
            <p>Recent searches:</p>
            <div className="recent-buttons">
              {recentSearches.map((search, index) => (
                <button key={index} onClick={() => handleRecentSearch(search)} className="recent-search-btn">
                  {search}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {loading && <div className="loading">Loading weather data...</div>}

      {error && <div className="error">{error}</div>}

      {data && (
        <div className="weather-container">
          <div className="top">
            <div className="location">
              <p>
                {data.name}, {data.sys.country}
              </p>
            </div>

            <div className="temp">
              <h1>{Math.round(data.main.temp)}°C</h1>
            </div>

            <div className="description">
              <p>{data.weather[0].main}</p>
              <p className="weather-description">{data.weather[0].description}</p>
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
              <p>Feels like</p>
            </div>

            <div className="humidity">
              <p className="bold">{data.main.humidity}%</p>
              <p>Humidity</p>
            </div>

            <div className="wind">
              <p className="bold">{data.wind.speed} km/h</p>
              <p>Wind Speed</p>
            </div>

            <div className="pressure">
              <p className="bold">{data.main.pressure} hPa</p>
              <p>Pressure</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}