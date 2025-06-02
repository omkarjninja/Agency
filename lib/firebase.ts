// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9Jlc3ZGyZ0FpxThtS6JlgvnpET0P1hx8",
  authDomain: "webonism-agency.firebaseapp.com",
  projectId: "webonism-agency",
  storageBucket: "webonism-agency.firebasestorage.app",
  messagingSenderId: "596365626339",
  appId: "1:596365626339:web:7810fdd29453ea50136ed6",
  measurementId: "G-ERSC130GTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };