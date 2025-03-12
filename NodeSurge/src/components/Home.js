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
      title: "Chatbot",
      description: "Interactive AI-powered conversation",
      icon: "🤖",
      href: "/chatbot",
    },

    {
      title: "Todo Manager",
      description: "Organize and track your tasks efficiently",
      icon: "✓",
      href: "/todo",
    },

    {
      title: "Weather",
      description: "Real-time weather updates and forecasts",
      icon: "🌤️",
      href: "/weather",
    },
    
    
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Applications</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {apps.map((app) => (
          <div key={app.title} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Link to={app.href} className="block text-center">
              <div className="mb-4 text-4xl">{app.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{app.title}</h3>
              <p className="text-gray-500">{app.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}