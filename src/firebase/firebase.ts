// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVLo6U6wX1otA4U6IgLurE-FVIKceVipY",
  authDomain: "devegg-bdced.firebaseapp.com",
  projectId: "devegg-bdced",
  storageBucket: "devegg-bdced.appspot.com",
  messagingSenderId: "1055653041458",
  appId: "1:1055653041458:web:474c3984424b75a432332b",
  measurementId: "G-WZ1SJ5QN00",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
