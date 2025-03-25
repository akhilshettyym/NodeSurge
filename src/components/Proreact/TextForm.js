"use client"

import { useState } from "react"
import proreactBg from "../../assets/proreact.jpg"

export default function TextForm(props) {
  const [text, setText] = useState("")
  const [findWord, setFindWord] = useState("")
  const [replaceWord, setReplaceWord] = useState("")

  // Handlers for text transformations
  const handleUpClick = () => {
    setText(text.toUpperCase())
    props.showAlert("Text converted to uppercase successfully.", "Success")
  }

  const handleLoClick = () => {
    setText(text.toLowerCase())
    props.showAlert("Text converted to lowercase successfully.", "Success")
  }

  const handleClearClick = () => {
    setText("")
    props.showAlert("Input fields have been cleared.", "Success")
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    props.showAlert("Modified text copied to clipboard.", "Success")
  }

  const handleExtraSpaces = () => {
    setText(text.replace(/\s+/g, " ").trim())
    props.showAlert("Extra spaces removed for better readability.", "Success")
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const handleFindReplace = () => {
    if (!findWord.trim()) return
    const newText = text.replace(new RegExp(findWord, "gi"), replaceWord)
    setText(newText)
    props.showAlert("Text replaced successfully.", "Success")
  }

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        backgroundImage: `url(${proreactBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: props.mode === "dark" ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)",
          zIndex: 0,
        }}
      ></div>
      <div
        className={`container w-100 px-4 ${props.mode === "dark" ? "text-white" : "text-dark"}`}
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="row justify-content-center">
          <div className="col-12">
            <h1 className="text-center mb-4">{props.heading}</h1>

            {/* Textarea */}
            <div className="mb-4 text-center">
              <textarea
                className="form-control shadow-sm"
                value={text}
                onChange={handleOnChange}
                style={{
                  backgroundColor: props.mode === "dark" ? "#2d3748" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                  border: props.mode === "dark" ? "1px solid #4a5568" : "1px solid #ced4da",
                  borderRadius: "8px",
                  minHeight: "300px",
                  padding: "20px",
                  fontSize: "18px",
                  resize: "vertical",
                  width: "95%",
                  maxWidth: "1500px",
                  margin: "0 auto",
                }}
                id="myBox"
                rows="8"
                placeholder="Enter your text here..."
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="d-flex flex-wrap gap-2 mb-4 justify-content-center">
              <button className="btn btn-primary px-3 py-2" onClick={handleUpClick}>
                Uppercase
              </button>
              <button className="btn btn-primary px-3 py-2" onClick={handleLoClick}>
                Lowercase
              </button>
              <button className="btn btn-primary px-3 py-2" onClick={handleCopy}>
                Copy Text
              </button>
              <button className="btn btn-primary px-3 py-2" onClick={handleExtraSpaces}>
                Remove Extra Spaces
              </button>
              <button className="btn btn-danger px-3 py-2" onClick={handleClearClick}>
                Clear
              </button>
            </div>

            {/* Find & Replace */}
            <div className="mb-4">
              <h3 className="mb-3">Find & Replace</h3>
              <div className="row g-3">
                <div className="col-md-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Find..."
                    value={findWord}
                    onChange={(e) => setFindWord(e.target.value)}
                    style={{
                      backgroundColor: props.mode === "dark" ? "#2d3748" : "white",
                      color: props.mode === "dark" ? "white" : "black",
                      border: props.mode === "dark" ? "1px solid #4a5568" : "1px solid #ced4da",
                    }}
                  />
                </div>
                <div className="col-md-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Replace with..."
                    value={replaceWord}
                    onChange={(e) => setReplaceWord(e.target.value)}
                    style={{
                      backgroundColor: props.mode === "dark" ? "#2d3748" : "white",
                      color: props.mode === "dark" ? "white" : "black",
                      border: props.mode === "dark" ? "1px solid #4a5568" : "1px solid #ced4da",
                    }}
                  />
                </div>
                <div className="col-md-2">
                  <button className="btn btn-success w-100" onClick={handleFindReplace} disabled={!findWord.trim()}>
                    Replace
                  </button>
                </div>
              </div>
            </div>

            {/* Text Summary */}
            <div
              className="card shadow-sm mb-4 mx-auto"
              style={{
                backgroundColor: props.mode === "dark" ? "#2d3748" : "white",
                color: props.mode === "dark" ? "white" : "black",
                border: props.mode === "dark" ? "1px solid #4b576c" : "1px solid #ced4da",
                borderRadius: "8px",
                minHeight: "300px",
                padding: "20px",
                fontSize: "18px",
                resize: "vertical",
                width: "95%",
                maxWidth: "1500px",
                margin: "0 auto",
              }}
            >
              <div className="card-body">
                <h2 className="card-title h4 mb-3">Your text summary</h2>
                <p className="mb-2">
                  <strong>{text.split(/\s+/).filter((word) => word !== "").length}</strong> words and
                  <strong> {text.length}</strong> characters
                </p>
                <p className="mb-3">
                  <strong>{(0.008 * text.split(/\s+/).filter((word) => word !== "").length).toFixed(2)}</strong> minutes
                  read time
                </p>
                <h3 className="h5 mb-2">Preview</h3>
                <p
                  className="card-text"
                  style={{
                    backgroundColor: props.mode === "dark" ? "#1a202c" : "#f8f9fa",
                    color: props.mode === "dark" ? "white" : "black",
                    padding: "10px",
                    borderRadius: "5px",
                    minHeight: "50px",
                  }}
                >
                  {text.length > 0 ? text : "Enter text above to preview it here."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}