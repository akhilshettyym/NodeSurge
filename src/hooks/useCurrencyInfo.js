"use client"

import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})

  useEffect(() => {
    // Updated API endpoint to a working one
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((response) => response.json())
      .then((res) => setData(res[currency]))
      .catch((err) => console.error("Error fetching currency data:", err))
  }, [currency])

  // Return default data if API fails
  return Object.keys(data).length ? data : { usd: 1, inr: 83.25, eur: 0.92, gbp: 0.79, jpy: 151.72 }
}

export default useCurrencyInfo;