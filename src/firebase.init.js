// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZdu6SsR-2HPv7nJYSY89uh6pyJM7dIgo",
  authDomain: "ema-john-simple-9d64a.firebaseapp.com",
  projectId: "ema-john-simple-9d64a",
  storageBucket: "ema-john-simple-9d64a.appspot.com",
  messagingSenderId: "403748354604",
  appId: "1:403748354604:web:5d20322b337085d7226f89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;