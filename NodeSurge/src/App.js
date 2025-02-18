"use client"

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/Auth/SignUp";
import Login from "./components/Auth/Login";
import Home from "./components/Home";
import { useState } from "react";


function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type })
    setTimeout(() => setAlert(null), 1500)
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#181818"
      showAlert("Dark mode has been enabled", "Success")
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "Success")
    }
  }

  return (
    <Router>
      <Navbar title="Ambulance" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/proreact"
          element={
            <div className="container my-3">
              <TextForm showAlert={showAlert} heading="Enter your text to analyze below:" mode={mode} />
            </div>
          }
        />
      </Routes>
    </Router>
  )
}

export default App