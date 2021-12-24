// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9-8KsvCw-kfgFTUDhZcAX0y-YlilBKvk",
    authDomain: "mawchat-121221.firebaseapp.com",
    projectId: "mawchat-121221",
    storageBucket: "mawchat-121221.appspot.com",
    messagingSenderId: "813086776521",
    appId: "1:813086776521:web:5ff63b4861d4ac73dc0118",
    databaseURL: "https://mawchat-121221-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
export const auth = getAuth(firebaseApp);
// Get a reference to the database service
export const db = getDatabase(firebaseApp);