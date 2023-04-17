// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTe-EI37xsYRYXKUEQJvWV_bEEM-gqpcs",
  authDomain: "ema-john-with-firebase-a-d1592.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-d1592",
  storageBucket: "ema-john-with-firebase-a-d1592.appspot.com",
  messagingSenderId: "846101629256",
  appId: "1:846101629256:web:149d9358b9697104ab0b7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app