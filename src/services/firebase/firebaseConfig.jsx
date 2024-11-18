import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwRPgTK6d-ZO8mcS-FB8-wBM9Op5de7UI",
  authDomain: "rbarron-ecommerce.firebaseapp.com",
  projectId: "rbarron-ecommerce",
  storageBucket: "rbarron-ecommerce.firebasestorage.app",
  messagingSenderId: "551859381006",
  appId: "1:551859381006:web:be2e12a33ade1fc51c6d5f",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
