// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const emailField = document.querySelector("#email");
const passField = document.querySelector("#pass");
const btnSubmit = document.querySelector("#submit");

const firebaseConfig = {
  apiKey: "AIzaSyCJlMQv7Nz1jlPEPTA0Lv1-beekeJQVgXo",
  authDomain: "khariansportsfest-fde2f.firebaseapp.com",
  databaseURL:
    "https://khariansportsfest-fde2f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "khariansportsfest-fde2f",
  storageBucket: "khariansportsfest-fde2f.appspot.com",
  messagingSenderId: "563033377764",
  appId: "1:563033377764:web:a60a2629ba101b0fc0d5f1",
  measurementId: "G-ZL382PSSXD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

function signIn(email, pass) {
  return signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

btnSubmit.addEventListener("click", (e) => {
  let email = emailField.innerText;
  let pass = passField.innerText;
  signIn(email, pass);
});
