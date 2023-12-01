// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6mWSp3j1Hnb2uJ18r5pl4zwI0ulVSdYs",
  authDomain: "netflix-gpt-12a13.firebaseapp.com",
  projectId: "netflix-gpt-12a13",
  storageBucket: "netflix-gpt-12a13.appspot.com",
  messagingSenderId: "832674095587",
  appId: "1:832674095587:web:76e6845d0b20de22a6c0d6",
  measurementId: "G-QT9M96YEY1"
};  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//getAuth is used several times that's the reason declaring it here. So, that we can directly access.
export const auth = getAuth();