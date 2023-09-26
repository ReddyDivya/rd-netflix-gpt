// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRH9QS2-0wHa4SJrBv7ekIBhaMAFe5eII",
    authDomain: "netflix-gpt-689a1.firebaseapp.com",
    projectId: "netflix-gpt-689a1",
    storageBucket: "netflix-gpt-689a1.appspot.com",
    messagingSenderId: "781071388104",
    appId: "1:781071388104:web:742366d6c0b7f85608c4fd",
    measurementId: "G-TKY90P4R8C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//getAuth is used several times that's the reason declaring it here. So, that we can directly access.
export const auth = getAuth();