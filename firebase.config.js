// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD-QiaYB-zkp7i5o2MIauypYt4y6QbB1c",
  authDomain: "credentials-manager-7dcfd.firebaseapp.com",
  projectId: "credentials-manager-7dcfd",
  storageBucket: "credentials-manager-7dcfd.appspot.com",
  messagingSenderId: "988207435152",
  appId: "1:988207435152:web:f1bf46b33882bf4251f715",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const provider = new GoogleAuthProvider();

export const auth = getAuth(app);
