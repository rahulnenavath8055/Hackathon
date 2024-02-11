// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg4EMNF2xBgO_IUgkYEstv4EfqJZ_rzpk",
  authDomain: "myvoteonline-734e8.firebaseapp.com",
  projectId: "myvoteonline-734e8",
  storageBucket: "myvoteonline-734e8.appspot.com",
  messagingSenderId: "762181117601",
  appId: "1:762181117601:web:559995f804885edee2b2e0",
  measurementId: "G-WTE8XRFSKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);