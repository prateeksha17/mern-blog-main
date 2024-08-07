// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-2fb34.firebaseapp.com",
  projectId: "mern-blog-2fb34",
  storageBucket: "mern-blog-2fb34.appspot.com",
  messagingSenderId: "987851019595",
  appId: "1:987851019595:web:aaec9775f023b1f47a44ce"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
