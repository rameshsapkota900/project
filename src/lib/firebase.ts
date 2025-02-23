import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDN5tv6BlSnP7Wzp1z1AMPfZg9fBD3do0M",
  authDomain: "coursework-f46b2.firebaseapp.com",
  projectId: "coursework-f46b2",
  storageBucket: "coursework-f46b2.firebasestorage.app",
  messagingSenderId: "1071501677254",
  appId: "1:1071501677254:web:c5f77c4ddf25b605ea7dc7",
  measurementId: "G-EHDN191B0R"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);