// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9d0uI_Q2dUZatNwUIcwpvta71w1hZGjo",
  authDomain: "assignment9-realestates.firebaseapp.com",
  projectId: "assignment9-realestates",
  storageBucket: "assignment9-realestates.appspot.com",
  messagingSenderId: "191146754909",
  appId: "1:191146754909:web:5c387c0897a11dee955eb4",
  measurementId: "G-Y0G25ZLKKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;