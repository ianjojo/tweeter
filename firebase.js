// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD85v3N42cCUwzvqmztXwyGbUBUUQcazhw",

  authDomain: "tweeter-e20e0.firebaseapp.com",

  projectId: "tweeter-e20e0",

  storageBucket: "tweeter-e20e0.appspot.com",

  messagingSenderId: "420038787111",

  appId: "1:420038787111:web:a41206e1f40b35f4988e02",

  measurementId: "G-V5Y9WPDC5T",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
