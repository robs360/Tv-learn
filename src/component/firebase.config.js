// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1gd3bDKgi5tZjUBk0R1ule9CR7RIGBAE",
  authDomain: "tvlearn.firebaseapp.com",
  projectId: "tvlearn",
  storageBucket: "tvlearn.appspot.com",
  messagingSenderId: "28763436158",
  appId: "1:28763436158:web:1a2acc6ffaef4e53e4142f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app