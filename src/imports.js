// General Imports
import "./styles/App.css"
import { HashRouter as Router, Route, Routes } from "react-router-dom"
import { useState } from "react"

// Components
import Navbar from "./components/Proreact/Navbar"
import TextForm from "./components/Proreact/TextForm"
import About from "./components/About/About"
import Alert from "./components/Proreact/Alert"
import Contact from "./components/Contact/Contact"
import LandingPage from "./components/LandingPage"
import SignUp from "./components/Auth/SignUp"
import Login from "./components/Auth/Login"
import Home from "./components/Home"
import TodoApp from "./components/TodoApp"
import WeatherApp from "./components/weather/WeatherApp"
import ChatBot from "./components/ChatBot/ChatBot"
import PassKey from "./components/PassKey/PassKey"
import Currex from "./components/Currex/Currex"

// Context & Auth
import { AuthProvider } from "./contexts/AuthContext"
import PrivateRoute from "./components/Auth/PrivateRoute"

// Export everything
export {
  Router,
  Route,
  Routes,
  useState,
  Navbar,
  TextForm,
  About,
  Alert,
  Contact,
  LandingPage,
  SignUp,
  Login,
  Home,
  TodoApp,
  WeatherApp,
  ChatBot,
  PassKey,
  Currex,
  AuthProvider,
  PrivateRoute
}
