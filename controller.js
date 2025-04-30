// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAed4BSSJtq5Uu5nhp6pLF33nj5Cy2vekI",
  authDomain: "mobile2025-30f99.firebaseapp.com",
  projectId: "mobile2025-30f99",
  storageBucket: "mobile2025-30f99.firebasestorage.app",
  messagingSenderId: "751165053799",
  appId: "1:751165053799:web:b03f5cb6a4956232096dc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
