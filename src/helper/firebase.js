import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDoaQ73C9qyYyi1dZ6y3RoJph5X2AailO4",
    authDomain: "sbs-evaluation.firebaseapp.com",
    databaseURL: "https://sbs-evaluation.firebaseio.com",
    projectId: "sbs-evaluation",
    storageBucket: "sbs-evaluation.appspot.com",
    messagingSenderId: "756754446296",
    appId: "1:756754446296:web:2291db86fe2c17a599e4ad"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;
