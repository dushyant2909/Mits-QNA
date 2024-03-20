import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB8GlkYs6rtApm20rXRwWL_K5XrRUkX8M4",
    authDomain: "mits-qna-jd.firebaseapp.com",
    projectId: "mits-qna-jd",
    storageBucket: "mits-qna-jd.appspot.com",
    messagingSenderId: "875009932772",
    appId: "1:875009932772:web:1453d90dc6ea2b806adbf1",
    measurementId: "G-K9QEB4B3H9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };