import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD23fPcux4sIObvJiUcC4NiLo9iOuP-Mas",
  authDomain: "skincare-44f34.firebaseapp.com",
  databaseURL: "https://skincare-44f34-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "skincare-44f34",
  storageBucket: "skincare-44f34.appspot.com",
  messagingSenderId: "49586641202",
  appId: "1:49586641202:web:a6ddc59a37ebafc6959f2b",
  measurementId: "G-FQT3VKKLMV"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
