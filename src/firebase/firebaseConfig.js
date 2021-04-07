import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
   apiKey: 'AIzaSyBLYBRp0I19NHMsQTAQlRW6nZXf-KkyLfM',
   authDomain: 'journal-app-react-300dc.firebaseapp.com',
   projectId: 'journal-app-react-300dc',
   storageBucket: 'journal-app-react-300dc.appspot.com',
   messagingSenderId: '175645804630',
   appId: '1:175645804630:web:4da4d98d2bbd3561fd13f7',
};

export const appFirebase = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
