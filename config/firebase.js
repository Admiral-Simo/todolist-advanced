// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADjXmNnW66_YItP-jKVYgUEdcfOwusc2U",
  authDomain: "todolist-a3c2f.firebaseapp.com",
  projectId: "todolist-a3c2f",
  storageBucket: "todolist-a3c2f.appspot.com",
  messagingSenderId: "149393416822",
  appId: "1:149393416822:web:f94790f0e134721b257557",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
