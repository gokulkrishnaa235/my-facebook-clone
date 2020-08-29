
import firebase from "firebase";


  const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyAScaxdtLT0s82xqyCXKftZQNy5ezBUbVU",
    authDomain: "gk-facebook-clone.firebaseapp.com",
    databaseURL: "https://gk-facebook-clone.firebaseio.com",
    projectId: "gk-facebook-clone",
    storageBucket: "gk-facebook-clone.appspot.com",
    messagingSenderId: "141672237393",
    appId: "1:141672237393:web:23fd025dfd7bba4ace6b70",
    measurementId: "G-9K97GJRYZW"

  });

  const db = firebaseapp.firestore();
  const auth = firebaseapp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};
  export default db;



