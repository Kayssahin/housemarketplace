
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4gBkfeNTfWOgnI1zxnYUM3N2JzHnk79U",
  authDomain: "bike-shop-2f66a.firebaseapp.com",
  projectId: "bike-shop-2f66a",
  storageBucket: "bike-shop-2f66a.appspot.com",
  messagingSenderId: "863149368542",
  appId: "1:863149368542:web:aefb78fd615228a72e0e4f",
  measurementId: "G-HQN574YDLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()