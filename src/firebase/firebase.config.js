// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWhHNCg7yjvCt5YrUFxZ7pzicsXPorOx0",
  authDomain: "taskcraft-7c1de.firebaseapp.com",
  projectId: "taskcraft-7c1de",
  storageBucket: "taskcraft-7c1de.appspot.com",
  messagingSenderId: "35791079583",
  appId: "1:35791079583:web:f8c331dfd3ea61eb657aaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
