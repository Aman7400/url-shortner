// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "short-ly-31654.firebaseapp.com",
  projectId: "short-ly-31654",
  storageBucket: "short-ly-31654.appspot.com",
  messagingSenderId: "135989163538",
  appId: "1:135989163538:web:4a8d8d3e22c7fc8cf20acb",
  measurementId: "G-YM9JT60J66",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
