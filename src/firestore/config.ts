import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCACLJfomS9ZOpdrLcjf4Gg7YHzDOYFBCs',
    authDomain: 'andeshey.firebaseapp.com',
    projectId: 'andeshey',
    storageBucket: 'andeshey.appspot.com',
    messagingSenderId: '113697085133',
    appId: '1:113697085133:web:dd4da50adfda4fd58abb84',
    measurementId: 'G-57C17S1QC7'
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log('Firebase configurado');

const db = firebase.firestore();

export default db;
