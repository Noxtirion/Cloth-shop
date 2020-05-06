import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
   apiKey: "AIzaSyC78w1zNeTtVcJ-2G9eYJXNpmbW25LgBD0",
   authDomain: "cloth-shop-project.firebaseapp.com",
   databaseURL: "https://cloth-shop-project.firebaseio.com",
   projectId: "cloth-shop-project",
   storageBucket: "cloth-shop-project.appspot.com",
   messagingSenderId: "161313020251",
   appId: "1:161313020251:web:361d90930cef366cc6227e",
   measurementId: "G-ECNJKZCVST"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
