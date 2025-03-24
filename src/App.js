"use client"

import "./styles/App.css"
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Proreact/Navbar"
import TextForm from "./components/Proreact/TextForm"
import About from "./components/About/About"
import Alert from "./components/Proreact/Alert"
import Contact from "./components/Contact/Contact"
import LandingPage from "./components/LandingPage"
import SignUp from "./components/Auth/SignUp"
import Login from "./components/Auth/Login"
import Home from "./components/Home"
import TodoApp from "./components/TodoApp"
import WeatherApp from "./components/weather/WeatherApp"
import { useState } from "react"
import ChatBot from "./components/ChatBot/ChatBot"
import { AuthProvider } from "./contexts/AuthContext"
import PrivateRoute from "./components/Auth/PrivateRoute"
import PassKey from "./components/PassKey/PassKey"

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
    <AuthProvider>
      <Router>
        <Navbar title="NodeSurge" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<LandingPage mode={mode} />} />
          <Route path="/signup" element={<SignUp mode={mode} />} />
          <Route path="/login" element={<Login mode={mode} />} />

          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home mode={mode} />
              </PrivateRoute>
            }
          />

          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/Contact" element={<Contact />} />

          <Route
            path="/todo"
            element={
              <PrivateRoute>
                <TodoApp mode={mode} />
              </PrivateRoute>
            }
          />
          
          <Route
            path="/passkey"
            element={
              <PrivateRoute>
                <PassKey mode={mode} />
              </PrivateRoute>
            }
          />

          <Route
            path="/weather"
            element={
              <PrivateRoute>
                <WeatherApp mode={mode} />
              </PrivateRoute>
            }
          />

          <Route
            path="/chatbot"
            element={
              <PrivateRoute>
                <ChatBot mode={mode} />
              </PrivateRoute>
            }
          />

          <Route
            path="/proreact"
            element={
              <PrivateRoute>
                <div className="container my-2">
                  <TextForm showAlert={showAlert} heading="Enter your text to analyze below:" mode={mode} />
                </div>
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>

    </AuthProvider>
  )
}
export default App;