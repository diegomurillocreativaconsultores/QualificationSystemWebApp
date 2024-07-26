// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAM-WGzpX5Qwl1h6l_RRaJqda892R0xTSg",
    authDomain: "jurados-creativa-studios.firebaseapp.com",
    projectId: "jurados-creativa-studios",
    storageBucket: "jurados-creativa-studios.appspot.com",
    messagingSenderId: "1082287878716",
    appId: "1:1082287878716:web:e0959f4e4e9766b01a8939",
    measurementId: "G-0J0F46H7LT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);