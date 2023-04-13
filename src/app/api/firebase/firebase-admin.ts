import { initializeApp, cert, getApps, getApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { serviceAccount } from "./serviceAccountKey";
import { getStorage } from "firebase-admin/storage";
const firebaseAdmin =
  getApps().length === 0
    ? initializeApp({
        credential: cert(serviceAccount),
        storageBucket: "devegg-bdced.appspot.com",
      })
    : getApp();

export const db = getFirestore();
export const bucket = getStorage().bucket();
