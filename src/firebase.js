// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "ISI_DENGAN_API_KEY_KAMU",
  authDomain: "ISI_DENGAN_AUTH_DOMAIN",
  projectId: "ISI_DENGAN_PROJECT_ID",
  storageBucket: "ISI_DENGAN_STORAGE_BUCKET",
  messagingSenderId: "ISI_DENGAN_MESSAGING_SENDER_ID",
  appId: "ISI_DENGAN_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
