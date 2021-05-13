import * as firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCnESl31RrWexdJRGs8ML8qltpWMQgO23Y",
    authDomain: "react-native-crud-ed446.firebaseapp.com",
    projectId: "react-native-crud-ed446",
    storageBucket: "react-native-crud-ed446.appspot.com",
    messagingSenderId: "605357845335",
    appId: "1:605357845335:web:4caaf6c07970aed6702c12",
    measurementId: "G-M42S3980GN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase