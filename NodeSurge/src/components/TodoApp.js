import "../styles/todo.css"
import { TodoWrapper } from "./Todo/TodoWrapper"

export default function TodoApp({ mode }) {
  return (
    <div className={`App ${mode === "dark" ? "bg-dark" : "bg-light"}`}>
      <TodoWrapper mode={mode} />
    </div>
  )
}