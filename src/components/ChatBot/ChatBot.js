"use client"

import { useEffect, useState, useRef } from "react"
import "../../styles/chatbot.css"
import ChatbotIcon from "./ChatBotIcon"
import ChatForm from "./ChatForm"
import ChatMessage from "./ChatMessage"
import { Helmet } from "react-helmet"
import chatNestBg from "../../assets/chatnest.jpg"

const ChatBot = ({ mode }) => {
  const [chatHistory, setChatHistory] = useState([])
  const chatBodyRef = useRef()

  const generateBotResponse = async (history) => {
    const updateHistory = (text) => {
      setChatHistory((prev) => [...prev.filter((msg) => msg.text !== "Thinking..."), { role: "model", text }])
    }

    // If no API URL is set, provide a fallback response
    if (!process.env.REACT_APP_API_URL) {
      setTimeout(() => {
        updateHistory(
          "I'm ChatNest, your AI assistant. How can I help you today? (Note: For full functionality, please set the REACT_APP_API_URL environment variable.)",
        )
      }, 1000)
      return
    }

    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }))

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    }

    try {
      const response = await fetch(process.env.REACT_APP_API_URL, requestOptions)
      const data = await response.json()

      console.log("API Response:", JSON.stringify(data, null, 2))

      if (!response.ok) throw new Error(data.error?.message || "Something went wrong!")

      if (!data.candidates || !data.candidates[0]?.content?.parts[0]?.text) {
        throw new Error("Unexpected API response format")
      }

      const apiResponse = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim()
      updateHistory(apiResponse)
    } catch (error) {
      console.error("Error fetching response:", error)
      updateHistory("Sorry, I encountered an error. Please check your API configuration or try again later.")
    }
  }

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" })
    }
  }, [chatHistory])

  return (
    <>
      <Helmet>
        <title>NodeSurge - ChatNest AI Assistant</title>
        <meta
          name="description"
          content="Chat with our AI assistant for help with research, coding, and more. Get smart, contextual responses in real-time."
        />
      </Helmet>
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          backgroundImage: `url(${chatNestBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "70px", // Add padding to account for navbar
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
            backgroundColor: mode === "dark" ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)",
            zIndex: 0,
          }}
        ></div>

        <div
          className={`chatbot-container ${mode === "dark" ? "dark-mode" : ""}`}
          style={{
            background: "none",
            position: "relative",
            zIndex: 1,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <div
            className="chatbot-popup"
            style={{
              width: "50%",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            {/* Chatbot Header */}
            <div className="chat-header">
              <div className="header-info">
                <ChatbotIcon /> {/* Display chatbot icon */}
                <h2 className="logo-text">ChatNest</h2> {/* Chatbot title */}
              </div>
              <button className="material-symbols-rounded">keyboard_arrow_down</button>{" "}
              {/* Button to collapse chatbot */}
            </div>

            {/* Chatbot Body */}
            <div ref={chatBodyRef} className="chat-body">
              {/* Initial greeting message from the bot */}
              <div className="message bot-message">
                <ChatbotIcon />
                <p className="message-text">
                  Hey there!👋
                  <br /> How can I assist you today?{" "}
                </p>
              </div>

              {/* Render the chat history dynamically */}
              {chatHistory.map((chat, index) => (
                <ChatMessage key={index} chat={chat} />
              ))}
            </div>

            {/* Chatbot Footer - Input field for user messages */}
            <div className="chat-footer">
              <ChatForm
                chatHistory={chatHistory}
                setChatHistory={setChatHistory}
                generateBotResponse={generateBotResponse}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatBot;