"use client"

import { useState } from "react"

export const TodoForm = ({ addTodo, mode }) => {
  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(value)
    setValue("")
  }

  return (
    <form onSubmit={handleSubmit} className="mb-2">
      <div className="input-group shadow-sm">
        <input
          type="text"
          className="form-control py-2"
          value={value}
          placeholder="What do you need to do today?"
          onChange={(e) => setValue(e.target.value)}
          style={{
            backgroundColor: mode === "dark" ? "#2d3748" : "white",
            color: mode === "dark" ? "white" : "black",
            border: mode === "dark" ? "1px solid #4a5568" : "1px solid #ced4da",
            borderRadius: "8px 0 0 8px",
            fontSize: "16px",
            height: "auto",
          }}
        />
        <button
          type="submit"
          className="btn btn-primary px-4"
          style={{
            borderRadius: "0 8px 8px 0",
            fontSize: "16px",
          }}
          disabled={!value.trim()}
        >
          Add
        </button>
      </div>
    </form>
  )
}