"use client"

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo, checkTodo, mode }) => {

  const formattedDate = task.timestamp ? new Date(task.timestamp).toLocaleDateString() : ""

  return (
    <div
      className="card mb-3 border-0 shadow-sm"
      style={{
        backgroundColor: mode === "dark" ? "rgba(26, 32, 44, 0.7)" : "rgba(248, 249, 250, 0.5)",
        color: mode === "dark" ? "white" : "black",
        borderRadius: "8px",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
    >
      <div className="card-body d-flex justify-content-between align-items-center py-3">
        <div className="d-flex align-items-center flex-grow-1">
          <div className="form-check form-check-inline mb-0">
            <input
              type="checkbox"
              className="form-check-input"
              checked={task.checked}
              onChange={() => checkTodo(task.id)}
              style={{
                cursor: "pointer",
                width: "20px",
                height: "20px",
                borderColor: mode === "dark" ? "#4a5568" : "#ced4da",
              }}
              id={`check-${task.id}`}
            />
            <label className="form-check-label visually-hidden" htmlFor={`check-${task.id}`}>
              Mark as done
            </label>
          </div>
          <div className="ms-2 flex-grow-1">
            <div
              className={`${task.completed ? "text-decoration-line-through opacity-75" : ""}`}
              onClick={() => toggleComplete(task.id)}
              style={{
                cursor: "pointer",
                wordBreak: "break-word",
              }}
            >
              {task.task}
            </div>
            {formattedDate && (
              <small
                className={`d-block mt-1 ${mode === "dark" ? "text-light" : "text-muted"}`}
                style={{ opacity: 0.7 }}
              >
                Added: {formattedDate}
              </small>
            )}
          </div>
        </div>
        <div className="d-flex gap-2 ms-3 flex-shrink-0">
          <button
            className="btn btn-sm"
            onClick={() => editTodo(task.id)}
            style={{
              backgroundColor: mode === "dark" ? "#2d3748" : "#e2e8f0",
              color: mode === "dark" ? "white" : "black",
              border: "none",
              borderRadius: "6px",
              padding: "0.25rem 0.5rem",
            }}
            aria-label="Edit task"
          >
            Edit
          </button>
          <button
            className="btn btn-sm"
            onClick={() => deleteTodo(task.id)}
            style={{
              backgroundColor: mode === "dark" ? "#742a2a" : "#fed7d7",
              color: mode === "dark" ? "white" : "#9b2c2c",
              border: "none",
              borderRadius: "6px",
              padding: "0.25rem 0.5rem",
            }}
            aria-label="Delete task"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}