// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpAqX1WtGYuWPdRvp0LIddxsWix_867XQ",
    authDomain: "fir-auth-2e9bc.firebaseapp.com",
    projectId: "fir-auth-2e9bc",
    storageBucket: "fir-auth-2e9bc.appspot.com",
    messagingSenderId: "778730700612",
    appId: "1:778730700612:web:81914ef5272430e6b32111"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);