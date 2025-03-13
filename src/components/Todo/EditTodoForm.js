"use client"

import { useState } from "react"

export const EditTodoForm = ({ editTodo, task, mode }) => {
  const [value, setValue] = useState(task.task)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.trim()) {
      editTodo(value, task.id)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{
            backgroundColor: mode === "dark" ? "#181818" : "white",
            color: mode === "dark" ? "white" : "black",
          }}
        />
        <button type="submit" className="btn btn-success">
          Update
        </button>
      </div>
    </form>
  )
}