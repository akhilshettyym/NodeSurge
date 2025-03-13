"use client"

import { createContext, useContext, useEffect, useState } from "react"
import {
  auth,
  doCreateUserWithEmailAndPassword,
  doSignInWithEmailAndPassword,
  doSignOut,
} from "../components/Auth/Firebase/firebase"
import { onAuthStateChanged } from "firebase/auth"

// Create the auth context
const AuthContext = createContext()

// Custom hook to use the auth context
export function useAuth() {
  return useContext(AuthContext)
}

// Provider component to wrap the app and provide auth context
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Sign up function
  async function signup(email, password) {
    return doCreateUserWithEmailAndPassword(email, password)
  }

  // Login function
  async function login(email, password) {
    return doSignInWithEmailAndPassword(email, password)
  }

  // Logout function
  async function logout() {
    return doSignOut()
  }

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  // Context value
  const value = {
    currentUser,
    signup,
    login,
    logout,
    loading,
  }

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}