import { initializeApp, cert, getApps, getApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { serviceAccount } from "./serviceAccountKey";
import { getStorage } from "firebase-admin/storage";
const firebaseAdmin =
  getApps().length === 0
    ? initializeApp({
        credential: cert(serviceAccount),
      })
    : getApp();

export const db = getFirestore();
