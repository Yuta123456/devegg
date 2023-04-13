import {
  initializeApp,
  cert,
  getApps,
  getApp,
  ServiceAccount,
} from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { serviceAccount } from "./serviceAccountKey";
import { getStorage } from "firebase-admin/storage";
const firebaseAdmin =
  getApps().length === 0
    ? initializeApp({
        credential: cert(serviceAccount as ServiceAccount),
      })
    : getApp();

export const db = getFirestore();
export const storage = getStorage().bucket("devegg-bdced.appspot.com");

// 5d5fae09-abdb-4ff2-ad03-d33d440e1f94
