"use client"

import { useState } from "react"

export const TodoForm = ({ addTodo, mode }) => {
  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.trim()) {
      addTodo(value)
      setValue("")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={value}
          placeholder="What is the task today?"
          onChange={(e) => setValue(e.target.value)}
          style={{
            backgroundColor: mode === "dark" ? "#181818" : "white",
            color: mode === "dark" ? "white" : "black",
          }}
        />
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </div>
    </form>
  )
}