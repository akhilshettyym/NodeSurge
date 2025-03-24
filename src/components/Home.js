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
      title: "Currex",
      description: "Currex is a currency converter app that allows users to convert between different currencies in real-time. It's ideal for travelers and business professionals.",
      icon: "💸",
      href: "/currex",
    },
      

    {
      title: "PassKey",
      description: "PassKey is a password generator that creates strong, secure passwords with a single click. It allows users to customize the length and complexity of the password.",
      icon: "🔑",
      href: "/passkey",
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
      description: "Weather App provides real-time weather updates for Goa, including temperature, humidity, wind speed, and current conditions. Stay informed about the weather anytime, anywhere.",
      icon: "🌤️",
      href: "/weather",
    },
  ]

  return (
    <div className="home-container">

      <h1
        className="text-3xl font-bold mb-8 text-center"
        style={{
          marginTop: '-20px', 
          fontWeight: 750,
          color: mode === 'dark' ? '#f8f9fa' : '#212529', // Adjust colors for dark and light mode
        }}>
        Explore Your Tools
      </h1>

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