// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvSrJ5umloUxVhOmEdtPFBsPIEGoucXJw",
  authDomain: "playerone-1f1ff.firebaseapp.com",
  projectId: "playerone-1f1ff",
  storageBucket: "playerone-1f1ff.appspot.com",
  messagingSenderId: "104873027085",
  appId: "1:104873027085:web:f68c9eaf696514de359744",
  measurementId: "G-LVRY18956W",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
