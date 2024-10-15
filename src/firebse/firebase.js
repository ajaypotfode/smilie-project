import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBfTwKGp2qggoKFJ8qIbE8wAV7qv4xrQAY",
    authDomain: "dreamlogics-task.firebaseapp.com",
    projectId: "dreamlogics-task",
    storageBucket: "dreamlogics-task.appspot.com",
    messagingSenderId: "1025575771126",
    appId: "1:1025575771126:web:354ef5c4d3b0b9e52e85d7",
    measurementId: "G-C11ST5K32K"
  };
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);