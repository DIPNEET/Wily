import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDEbGMxS4ftHJ0hiNTJrMrKIqcFJotStss",
  authDomain: "anishka-ca385.firebaseapp.com",
  databaseURL: "https://anishka-ca385.firebaseio.com",
  projectId: "anishka-ca385",
  storageBucket: "anishka-ca385.appspot.com",
  messagingSenderId: "169164367539",
  appId: "1:169164367539:web:c7935fcf5ebfd9f5f9f2c6"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
