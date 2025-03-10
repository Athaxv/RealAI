// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "realai-8a54d.firebaseapp.com",
  projectId: "realai-8a54d",
  storageBucket: "realai-8a54d.firebasestorage.app",
  messagingSenderId: "820145681442",
  appId: "1:820145681442:web:6a5d9599d7e5cc3466467b",
  measurementId: "G-PFFB6X5YNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);