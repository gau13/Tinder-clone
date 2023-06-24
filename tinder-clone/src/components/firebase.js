// import firebase from "firebase";
// import { initializeApp } from "/firebase-app";

import firebase from "firebase/compat/app";
// import 'firebase/compat/auth';
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDn7r3_dhL_kBFDbrRGAgzkn_4NkjtizWo",
  authDomain: "tinder-clone-8e9d4.firebaseapp.com",
  projectId: "tinder-clone-8e9d4",
  storageBucket: "tinder-clone-8e9d4.appspot.com",
  messagingSenderId: "207405638115",
  appId: "1:207405638115:web:a4f032cfaee9ca76bc40d6",
  measurementId: "G-D8XKNCPG4S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
