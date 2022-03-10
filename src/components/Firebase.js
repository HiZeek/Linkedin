import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBA6WEJw6cBnTtvsACnb-AWN_KmmzKjPhA",
    authDomain: "linkedin-3c5df.firebaseapp.com",
    projectId: "linkedin-3c5df",
    storageBucket: "linkedin-3c5df.appspot.com",
    messagingSenderId: "623016463618",
    appId: "1:623016463618:web:33209cb463090ac0d1461b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };