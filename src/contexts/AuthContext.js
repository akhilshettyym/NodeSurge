"use client"

import { createContext, useContext, useEffect, useState } from "react"
import {
  auth,
  doCreateUserWithEmailAndPassword,
  doSignInWithEmailAndPassword,
  doSignOut,
} from "../components/Auth/Firebase/firebase"
import { onAuthStateChanged } from "firebase/auth"

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  async function signup(email, password) {
    return doCreateUserWithEmailAndPassword(email, password)
  }

  async function login(email, password) {
    return doSignInWithEmailAndPassword(email, password)
  }

  async function logout() {
    return doSignOut()
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signup,
    login,
    logout,
    loading,
  }

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}