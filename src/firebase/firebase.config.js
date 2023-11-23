// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjgKXT1DPMvb3SQsjPniYE4kJzcAC4lWY",
  authDomain: "peoplepro-af1ed.firebaseapp.com",
  projectId: "peoplepro-af1ed",
  storageBucket: "peoplepro-af1ed.appspot.com",
  messagingSenderId: "468030986688",
  appId: "1:468030986688:web:16841e0ff15bd278185025"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;