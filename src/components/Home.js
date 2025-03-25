import { Link } from "react-router-dom";
import "../styles/home.css";
import homeBg from "../assets/home.jpg";

export default function Home({ mode }) {
  const apps = [
    {
      title: "ProReact",
      description:
        "ProReact is a text utility app that allows users to format text, convert case, remove extra spaces, and count words and letters in real-time. It's ideal for writers and content creators.",
      icon: "📝",
      href: "/proreact",
    },
    {
      title: "Currex",
      description:
        "Currex is a currency converter app that allows users to convert between different currencies in real-time. It's ideal for travelers and business professionals.",
      icon: "💸",
      href: "/currex",
    },
    {
      title: "Todo Manager",
      description:
        "To-Do Manager helps users manage daily tasks by creating, updating, and tracking them. Its clean interface makes it easy to stay organized and productive.",
      icon: "✓",
      href: "/todo",
    },
    {
      title: "Weather App",
      description:
        "Weather App provides real-time weather updates, including temperature, humidity, wind speed, and current conditions. Stay informed about the weather anytime, anywhere.",
      icon: "🌤️",
      href: "/weather",
    },
    {
      title: "PassKey",
      description:
        "PassKey is a password generator that creates strong, secure passwords with a single click. It allows users to customize the length and complexity of the password.",
      icon: "🔑",
      href: "/passkey",
    },
    {
      title: "ChatNest",
      description:
        "ChatNest is an AI chatbot using the Gemini model that provides real-time, smart responses to questions, assists with research and coding, and handles casual and professional conversations.",
      icon: "🤖",
      href: "/chatbot",
    },
  ];

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${homeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      {/* Dark Mode Overlay */}
      <div
        className="overlay"
        style={{
          backgroundColor: mode === "dark" ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)",
        }}
      ></div>

      <div className="content">
        <h1 className="app-header">Explore Your Tools</h1>

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
    </div>
  );
}