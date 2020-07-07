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

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);

   const snapShot = await userRef.get();

   if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
         });
      } catch (error) {
         console.log("error creating user", error.message);
      }
   }
   return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
   const collectionRef = firestore.collection(collectionKey);
   console.log(collectionRef);

   const batch = firestore.batch();

   objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
   });

   return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
   const transformedCollections = collections.docs.map(doc => {
      const { title, items } = doc.data();

      return {
         routeName: encodeURI(title.toLowerCase()),
         id: doc.id,
         title,
         items
      };
   });

   return transformedCollections.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
   }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
