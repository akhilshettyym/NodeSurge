import "./Contact.css"
import contactBg from "../../assets/contact.jpg"

const Contact = ({ mode }) => {
  return (
    <div
      className={`contact-container ${mode === "dark" ? "dark-mode" : ""}`}
      style={{
        backgroundImage: `url(${contactBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundColor: mode === "dark" ? "#181818" : "#f4f4f9",
      }}
    >
      <div
        className="contact-card"
        style={{
          backgroundColor: mode === "dark" ? "rgba(40, 44, 52, 0.85)" : "rgba(255, 255, 255, 0.85)",
          color: mode === "dark" ? "#ffffff" : "#333",
          boxShadow: mode === "dark" ? "0 4px 15px rgba(0, 0, 0, 0.5)" : "0 4px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2 style={{ color: mode === "dark" ? "#61dafb" : "#333" }}>Get in Touch</h2>
        <p>
          Hey there! 👋 I'm <strong>Akhil Shetty</strong>, a passionate developer from Mangalore. I'm always open to
          connecting and collaborating on exciting projects.
        </p>
        <div className="contact-details">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:akhilshettym2003@gmail.com" style={{ color: mode === "dark" ? "#61dafb" : "#4f46e5" }}>
              akhilshettym2003@gmail.com
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/akhilshettym"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: mode === "dark" ? "#61dafb" : "#4f46e5" }}
            >
              linkedin.com/in/akhilshettym
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/akhilshettyym"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: mode === "dark" ? "#61dafb" : "#4f46e5" }}
            >
              github.com/akhilshettyym
            </a>
          </p>
        </div>
        <div className="contact-footer">
          <p style={{ color: mode === "dark" ? "#adb5bd" : "#777" }}>Looking forward to hearing from you! 😊</p>
        </div>
      </div>
    </div>
  )
}

export default Contact;