"use client"

import { useState, useEffect } from "react"
import { TodoForm } from "./TodoForm"
import { Todo } from "./Todo"
import { EditTodoForm } from "./EditTodoForm"

export const TodoWrapper = ({ mode }) => {
  // Load todos from localStorage on component mount
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos")
    return savedTodos ? JSON.parse(savedTodos) : []
  })

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addTodo = (todo) => {
    if (!todo.trim()) return
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        task: todo,
        completed: false,
        isEditing: false,
        checked: false,
        timestamp: new Date().toISOString(),
      },
    ])
  }

  const toggleComplete = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const editTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)))
  }

  const editTask = (task, id) => {
    if (!task.trim()) return
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, task, isEditing: false } : todo)))
  }

  const checkTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)))
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div
            className="card shadow-lg border-0 overflow-hidden"
            style={{
              backgroundColor: mode === "dark" ? "rgba(45, 55, 72, 0.7)" : "rgba(255, 255, 255, 0.5)",
              color: mode === "dark" ? "white" : "black",
              borderRadius: "12px",
            }}
          >
            <div
              className="card-header py-3"
              style={{
                backgroundColor: mode === "dark" ? "rgba(26, 32, 44, 0.8)" : "rgba(248, 249, 250, 0.6)",
                borderBottom: mode === "dark" ? "1px solid #4a5568" : "1px solid #dee2e6",
              }}
            >
              <h1 className="text-center m-0 h3">Todo List</h1>
            </div>
            <div className="card-body p-4">
              <TodoForm addTodo={addTodo} mode={mode} />

              {todos.length === 0 ? (
                <div
                  className="text-center py-5 my-3"
                  style={{
                    backgroundColor: mode === "dark" ? "rgba(26, 32, 44, 0.6)" : "rgba(248, 249, 250, 0.4)",
                    borderRadius: "8px",
                  }}
                >
                  <p className="mb-0">No tasks yet. Add a task to get started!</p>
                </div>
              ) : (
                <div className="todo-list mt-4">
                  {todos.map((todo) =>
                    todo.isEditing ? (
                      <EditTodoForm editTodo={editTask} task={todo} key={todo.id} mode={mode} />
                    ) : (
                      <Todo
                        key={todo.id}
                        task={todo}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                        checkTodo={checkTodo}
                        mode={mode}
                      />
                    ),
                  )}
                </div>
              )}
            </div>
            <div
              className="card-footer py-3 text-center"
              style={{
                backgroundColor: mode === "dark" ? "rgba(26, 32, 44, 0.8)" : "rgba(248, 249, 250, 0.6)",
                borderTop: mode === "dark" ? "1px solid #4a5568" : "1px solid #dee2e6",
              }}
            >
              <small className={mode === "dark" ? "text-light" : "text-muted"}>
                {todos.length} {todos.length === 1 ? "task" : "tasks"} •{todos.filter((todo) => todo.completed).length}{" "}
                completed
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}