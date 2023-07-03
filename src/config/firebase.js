import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FBASE_API_KEY,
  authDomain: import.meta.env.VITE_FBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FBASE_APP_ID,
  measurementId: import.meta.env.VITE_FBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
