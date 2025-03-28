"use client"

import {
  Router,
  Route,
  Routes,
  useState,
  Navbar,
  TextForm,
  About,
  Alert,
  Contact,
  LandingPage,
  SignUp,
  Login,
  Home,
  TodoApp,
  WeatherApp,
  ChatBot,
  PassKey,
  Currex,
  AuthProvider,
  PrivateRoute,
} from "./imports"

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
        <div style={{ position: "relative", minHeight: "100vh" }}>
          <div style={{ position: "sticky", top: 0, zIndex: 1000 }}>
            <Navbar title="NodeSurge" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
          </div>
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
              path="/currex"
              element={
                <PrivateRoute>
                  <Currex mode={mode} />
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
                  <div className="container-fluid p-0">
                    <TextForm showAlert={showAlert} heading="Enter your text to analyze below:" mode={mode} />
                  </div>
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}
export default App;