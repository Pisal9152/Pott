
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import Login from "../Login";

// const firebaseConfig = {
  // apiKey: "AIzaSyAbhK7lX1aRL6CpXhe6rLq04XkQAqVIId8",
  // authDomain: "sign-up-b1136.firebaseapp.com",
  // projectId: "sign-up-b1136",
  // storageBucket: "sign-up-b1136.appspot.com",
  // messagingSenderId: "732468061595",
  // appId: "1:732468061595:web:cb6ca75df2216247d5ed3e",
  // measurementId: "G-R914NH90T0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app)


// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAbhK7lX1aRL6CpXhe6rLq04XkQAqVIId8",
  authDomain: "sign-up-b1136.firebaseapp.com",
  projectId: "sign-up-b1136",
  storageBucket: "sign-up-b1136.appspot.com",
  messagingSenderId: "732468061595",
  appId: "1:732468061595:web:cb6ca75df2216247d5ed3e",
  measurementId: "G-R914NH90T0"
  // Your Firebase configuration
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, onAuthStateChanged };  // Export onAuthStateChanged along with auth
