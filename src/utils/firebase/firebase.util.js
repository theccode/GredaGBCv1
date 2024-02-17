// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//google imports
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjls0Bw5Hm2Hq7L1hy68tm3cBi9d2a-2o",
  authDomain: "greda-gbc-v1.firebaseapp.com",
  projectId: "greda-gbc-v1",
  storageBucket: "greda-gbc-v1.appspot.com",
  messagingSenderId: "168162065332",
  appId: "1:168162065332:web:56c86b59f071e13581d0e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const createUserDocumentFromAuth = () => {};
export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return await signInWithEmailAndPassword(auth, email, password);
};
