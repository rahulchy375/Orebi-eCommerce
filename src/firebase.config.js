// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLHjx6MvxxrDpT3luqjv7dxF8lxsxotEs",
  authDomain: "orebi-ecommerce-1ae2f.firebaseapp.com",
  projectId: "orebi-ecommerce-1ae2f",
  storageBucket: "orebi-ecommerce-1ae2f.appspot.com",
  messagingSenderId: "9659139013",
  appId: "1:9659139013:web:993f23476a5aa96f5781ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig