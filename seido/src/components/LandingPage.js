import { useNavigate } from "react-router-dom"

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center space-y-8 px-4 text-center">
      <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">Welcome to Abulance</h1>
      <p className="max-w-[700px] text-gray-500 md:text-xl">
        Your collection of powerful web applications. From text analysis to weather tracking, we&apos;ve got you
        covered.
      </p>
      <button
        onClick={() => navigate("/signup")}
        className="px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >
        Get Started
      </button>
    </div>
  )
}