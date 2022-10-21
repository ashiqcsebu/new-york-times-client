// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiM6FW0y1Ggi6kFKPMMt1i5OMnFLYexdw",
  authDomain: "new-york-times-8d720.firebaseapp.com",
  projectId: "new-york-times-8d720",
  storageBucket: "new-york-times-8d720.appspot.com",
  messagingSenderId: "844684299399",
  appId: "1:844684299399:web:2aa3ba828bd97acebb3c22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;