// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtFWQUJjprGLOAZiAKYBZDdTmYzi914pY",
  authDomain: "plataforma-conquistando-f33bb.firebaseapp.com",
  databaseURL: "https://plataforma-conquistando-f33bb-default-rtdb.firebaseio.com",
  projectId: "plataforma-conquistando-f33bb",
  storageBucket: "plataforma-conquistando-f33bb.appspot.com",
  messagingSenderId: "590905535773",
  appId: "1:590905535773:web:28510442a4591b548845f4",
  measurementId: "G-652N3GZJY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
