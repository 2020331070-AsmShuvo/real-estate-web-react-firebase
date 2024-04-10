import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCxC_qdWtm0qK9873xTt9BZIKiGcaSGuqw",
  authDomain: "majestic-mansion.firebaseapp.com",
  projectId: "majestic-mansion",
  storageBucket: "majestic-mansion.appspot.com",
  messagingSenderId: "192545512154",
  appId: "1:192545512154:web:b141082418eae5ba2223e3",
  measurementId: "G-X6E7YFP32V"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;