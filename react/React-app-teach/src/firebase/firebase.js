// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzQmbEoPW4H1C7hmIPmAe7_R5uVK6QmiQ",
  authDomain: "taskmanager-fe721.firebaseapp.com",
  projectId: "taskmanager-fe721",
  storageBucket: "taskmanager-fe721.firebasestorage.app",
  messagingSenderId: "286019392125",
  appId: "1:286019392125:web:0dc802df104e1dc2655714",
  measurementId: "G-8NXP7PS5YP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
