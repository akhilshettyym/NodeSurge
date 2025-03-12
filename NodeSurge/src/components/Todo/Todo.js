"use client"

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo, checkTodo, mode }) => {
  return (
    <div
      className="card mb-3"
      style={{
        backgroundColor: mode === "dark" ? "#282c34" : "white",
        color: mode === "dark" ? "white" : "black",
      }}
    >
      <div className="card-body d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <input
            type="checkbox"
            className="form-check-input me-2"
            checked={task.checked}
            onChange={() => checkTodo(task.id)}
          />
          <span
            className={`${task.completed ? "text-decoration-line-through" : ""}`}
            onClick={() => toggleComplete(task.id)}
            style={{ cursor: "pointer" }}
          >
            {task.task}
          </span>
        </div>
        <div>
          <button className="btn btn-sm btn-outline-primary me-2" onClick={() => editTodo(task.id)}>
            Edit
          </button>
          <button className="btn btn-sm btn-outline-danger" onClick={() => deleteTodo(task.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}