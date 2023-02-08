// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdhFRH3LGgY3UQI9E_QA1Loc638deIam8",
  authDomain: "discord-clone-6d8ec.firebaseapp.com",
  projectId: "discord-clone-6d8ec",
  storageBucket: "discord-clone-6d8ec.appspot.com",
  messagingSenderId: "384032641692",
  appId: "1:384032641692:web:56b76fd131000875541359"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const provider = new GoogleAuthProvider();


// const signIn = (e) => {
 // e.preventDefault();
 // signInWithPopup(auth, provider)
 // .then(() => navigate("/channels"))
 // .catch((error)=>alert(error.message))
//};
