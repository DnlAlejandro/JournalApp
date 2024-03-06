// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTSI5M16LkvGKvb3WcipEPC_s0h80ITPY",
  authDomain: "react-courses-768b2.firebaseapp.com",
  projectId: "react-courses-768b2",
  storageBucket: "react-courses-768b2.appspot.com",
  messagingSenderId: "35149105747",
  appId: "1:35149105747:web:2c50da8ba02907faccd4a6"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );