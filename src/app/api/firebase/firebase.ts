import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDZnICWKQAX1f0ssllcyPjystkcR3Pka5Q",
  authDomain: "designer-service.firebaseapp.com",
  projectId: "designer-service",
  storageBucket: "designer-service.appspot.com",
  messagingSenderId: "316701803368",
  appId: "1:316701803368:web:6e97399448f1c876fe8cdd",
  measurementId: "G-KBYD13SR04",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
