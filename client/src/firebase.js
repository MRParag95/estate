// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-269a1.firebaseapp.com",
  projectId: "estate-269a1",
  storageBucket: "estate-269a1.appspot.com",
  messagingSenderId: "726178954978",
  appId: "1:726178954978:web:aa5705ef6d6202825f28bb",
  measurementId: "G-Y776LGDPD6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
