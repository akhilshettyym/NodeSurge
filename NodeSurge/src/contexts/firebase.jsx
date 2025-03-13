// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
import { doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword, doSignOut } from "./auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpFUifK4u1-K0cr9ydjg_Iv4zvnCHiZ-M",
  authDomain: "nodesurge.firebaseapp.com",
  projectId: "nodesurge",
  storageBucket: "nodesurge.firebasestorage.app",
  messagingSenderId: "46469845859",
  appId: "1:46469845859:web:17b7421068cb0b3af77956",
  measurementId: "G-GT17ELEKVS",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)

export { app, auth, analytics, doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword, doSignOut }