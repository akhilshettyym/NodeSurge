import { Link } from "react-router-dom"
import "../styles/home.css"

export default function Home({ mode }) {
  const apps = [
    {
      title: "ProReact",
      description: " ProReact is a text utility app that allows users to format text, convert case, remove extra spaces, and count words and letters in real-time. It's ideal for writers and content creators.",
      icon: "📝",
      href: "/proreact",
    },
    {
      title: "ChatNest",
      description: "ChatNest is an AI chatbot using the Gemini model that provides real-time, smart responses to questions, assists with research and coding, and handles casual and professional conversations.",
      icon: "🤖",
      href: "/chatbot",
    },
    {
      title: "Todo Manager",
      description: "To-Do Manager helps users manage daily tasks by creating, updating, and tracking them. Its clean interface makes it easy to stay organized and productive.",
      icon: "✓",
      href: "/todo",
    },
    {
      title: "Weather App",
      description: "Weather App gives real-time weather updates, including temperature, humidity, wind speed, and conditions based on the user’s location.",
      icon: "🌤️",
      href: "/weather",
    },
  ]

  return (
    <div className="home-container">

      <h1 className="text-3xl font-bold mb-8 text-center" style={{ marginTop: '-20px' }}> Your Applications</h1>

      <div className="app-list">
        {apps.map((app) => (
          <Link to={app.href} key={app.title} className="app-card">
            <div className="app-icon">{app.icon}</div>
            <div className="app-details">
              <h3 className="app-title">{app.title}</h3>
              <p className="app-description">{app.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}