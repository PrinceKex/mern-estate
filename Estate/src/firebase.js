// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-estate-bd557.firebaseapp.com',
  projectId: 'mern-estate-bd557',
  storageBucket: 'mern-estate-bd557.appspot.com',
  messagingSenderId: '25816186592',
  appId: '1:25816186592:web:f641a7f3b371c017cc9a85',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
