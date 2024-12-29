import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVXXaMI1PHV3VuSZZvtMepUytnLF32cMQ",
  authDomain: "wondercrafts-595a9.firebaseapp.com",
  projectId: "wondercrafts-595a9",
  storageBucket: "wondercrafts-595a9.appspot.com",
  messagingSenderId: "775624794218",
  appId: "1:775624794218:web:3567070e1a03d2ef10ea13",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
