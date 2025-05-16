"use client"

import { useState, useEffect, useRef } from "react"

export const EditTodoForm = ({ editTodo, task, mode }) => {
  const [value, setValue] = useState(task.task)
  const inputRef = useRef(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    editTodo(value, task.id)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group shadow-sm">
        <input
          type="text"
          className="form-control py-2"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          ref={inputRef}
          style={{
            backgroundColor: mode === "dark" ? "#2d3748" : "white",
            color: mode === "dark" ? "white" : "black",
            border: mode === "dark" ? "1px solid #4a5568" : "1px solid #ced4da",
            borderRadius: "8px 0 0 8px",
            fontSize: "16px",
          }}
        />
        <button
          type="submit"
          className="btn btn-success px-3"
          style={{
            borderRadius: "0 8px 8px 0",
          }}
          disabled={!value.trim()}
        >
          Update
        </button>
      </div>
    </form>
  )
}