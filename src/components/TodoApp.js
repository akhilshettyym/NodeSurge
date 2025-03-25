import "../styles/todo.css"
import { TodoWrapper } from "./Todo/TodoWrapper"
import todoBg from "../assets/todo.jpg"

export default function TodoApp({ mode }) {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: `url(${todoBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        paddingTop: "70px",
        paddingBottom: "30px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: mode === "dark" ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.5)",
          zIndex: 0,
        }}
      ></div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          background: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 100px)",
        }}
      >
        <TodoWrapper mode={mode} />
      </div>
    </div>
  )
}