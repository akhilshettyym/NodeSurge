"use client"

import { useState } from "react"
import { TodoForm } from "./TodoForm"
import { Todo } from "./Todo"
import { EditTodoForm } from "./EditTodoForm"

export const TodoWrapper = ({ mode }) => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        task: todo,
        completed: false,
        isEditing: false,
        checked: false,
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
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, task, isEditing: false } : todo)))
  }

  const checkTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)))
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div
            className="card shadow-lg"
            style={{
              backgroundColor: mode === "dark" ? "#282c34" : "white",
              color: mode === "dark" ? "white" : "black",
            }}
          >
            <div className="card-body">
              <h1 className="text-center mb-4">Todo List</h1>
              <TodoForm addTodo={addTodo} mode={mode} />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}