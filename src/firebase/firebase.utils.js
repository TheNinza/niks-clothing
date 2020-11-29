import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC9yYLBaeiykX7uO2Za6As9eMPY-rwvvk4",
  authDomain: "niks-clothing.firebaseapp.com",
  databaseURL: "https://niks-clothing.firebaseio.com",
  projectId: "niks-clothing",
  storageBucket: "niks-clothing.appspot.com",
  messagingSenderId: "382179076234",
  appId: "1:382179076234:web:376b00e53c91170cece573",
  measurementId: "G-ZGX5NXW6LG",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
