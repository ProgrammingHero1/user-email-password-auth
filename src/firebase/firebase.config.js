// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKl4YZbiK6HCsI8ofKdqQRxxI0BaZfLVY",
  authDomain: "user-email-password-auth-663de.firebaseapp.com",
  projectId: "user-email-password-auth-663de",
  storageBucket: "user-email-password-auth-663de.appspot.com",
  messagingSenderId: "977014490042",
  appId: "1:977014490042:web:44416cdb277fdae3a81383"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;