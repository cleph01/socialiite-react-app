import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAgtTg-AQg8-7xNZSIqtv2azDZurfhDcG8",
    authDomain: "socialiite-instagram-clone.firebaseapp.com",
    databaseURL: "https://socialiite-instagram-clone-default-rtdb.firebaseio.com",
    projectId: "socialiite-instagram-clone",
    storageBucket: "socialiite-instagram-clone.appspot.com",
    messagingSenderId: "200914696215",
    appId: "1:200914696215:web:e0da5e2548f50e7ede8452",
    measurementId: "G-BJMCZWQNC9"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage};

  // export default db;