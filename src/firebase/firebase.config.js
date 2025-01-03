// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.vite_apiKey,
  authDomain: import.meta.env.vite_authDomain,
  projectId: import.meta.env.vite_projectId,
  storageBucket: import.meta.env.vite_storageBucket,
  messagingSenderId: import.meta.env.vite_messagingSenderId,
  appId: import.meta.env.vite_appId,
  measurementId: import.meta.env.vite_measurementId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);