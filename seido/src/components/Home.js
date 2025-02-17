import { Link } from "react-router-dom"

export default function Home() {
  const apps = [
    {
      title: "ProReact",
      description: "Advanced text analysis and manipulation tool",
      icon: "📝",
      href: "/proreact",
    },
    {
      title: "Todo Manager",
      description: "Organize and track your tasks efficiently",
      icon: "✓",
      href: "/todo",
    },
    {
      title: "Counter",
      description: "Simple yet powerful counter application",
      icon: "🔢",
      href: "/counter",
    },
    {
      title: "Stopwatch",
      description: "Precise time tracking made easy",
      icon: "⏱️",
      href: "/stopwatch",
    },
    {
      title: "Weather",
      description: "Real-time weather updates and forecasts",
      icon: "🌤️",
      href: "/weather",
    },
    {
      title: "Chatbot",
      description: "Interactive AI-powered conversation",
      icon: "🤖",
      href: "/chatbot",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Applications</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {apps.map((app) => (
          <Link
            key={app.title}
            to={app.href}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800"
          >
            <div className="mb-2 text-2xl">{app.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{app.title}</h3>
            <p className="text-gray-500">{app.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}