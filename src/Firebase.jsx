// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaGje0GAjQagO_In_fuXYAxEZhF-2AmBs",
  authDomain: "react-firebase-e04b2.firebaseapp.com",
  projectId: "react-firebase-e04b2",
  storageBucket: "react-firebase-e04b2.appspot.com",
  messagingSenderId: "672095475985",
  appId: "1:672095475985:web:d9f69368405736796d14b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);