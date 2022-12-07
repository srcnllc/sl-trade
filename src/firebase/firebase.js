import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAH_axS9cHTWDzz_GnbAj20hwqVAK31qHw",
    authDomain: "sl-trade.firebaseapp.com",
    projectId: "sl-trade",
    storageBucket: "sl-trade.appspot.com",
    messagingSenderId: "549198800664",
    appId: "1:549198800664:web:3a4b47fe6037705a59a06d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
