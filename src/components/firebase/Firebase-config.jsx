// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF7cBrI6JrVZ1Y3FqgdVpC8uCvsVbaf70",
  authDomain: "movie-app-77587.firebaseapp.com",
  projectId: "movie-app-77587",
  storageBucket: "movie-app-77587.appspot.com",
  messagingSenderId: "275328070237",
  appId: "1:275328070237:web:549814ff7b342cc41f93b4",
  measurementId: "G-KVTT332N3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };