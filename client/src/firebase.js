// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth2-26ab4.firebaseapp.com",
  projectId: "auth2-26ab4",
  storageBucket: "auth2-26ab4.appspot.com",
  messagingSenderId: "415651448547",
  appId: "1:415651448547:web:fe1854357e239977e567d6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);