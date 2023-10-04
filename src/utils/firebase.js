// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOMQeQPtW-CoeddcC2ySdjlYDCstBCrmE",
  authDomain: "netflix-gpt-279ac.firebaseapp.com",
  projectId: "netflix-gpt-279ac",
  storageBucket: "netflix-gpt-279ac.appspot.com",
  messagingSenderId: "492783392934",
  appId: "1:492783392934:web:4a9f79f2439f9834757c67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
