import * as firebase from 'firebase';
require ('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyDyeDFiiQohe3xy4PcQ4Nuz-GI2jhoTlIQ",
    authDomain: "wily-app-b1819.firebaseapp.com",
    projectId: "wily-app-b1819",
    storageBucket: "wily-app-b1819.appspot.com",
    messagingSenderId: "327402546660",
    appId: "1:327402546660:web:b6fe2930556b1435c7d3f1"
  };

  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase.firestore();