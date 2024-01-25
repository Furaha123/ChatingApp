import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBiM6itf42hR8cCPmhsr6jZ9c-q8INDncc",
  authDomain: "chat-76d93.firebaseapp.com",
  projectId: "chat-76d93",
  storageBucket: "chat-76d93.appspot.com",
  messagingSenderId: "94490441972",
  appId: "1:94490441972:web:12a230ed7e440d59d906a1",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
const db = getFirestore();
export { app, db };
