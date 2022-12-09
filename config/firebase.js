import firebase from "firebase/compat/app";
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyBe9bdrDsrVrK78yBGQrLQuDoNEY3WSnyY",
  authDomain: "reactnative-122db.firebaseapp.com",
  projectId: "reactnative-122db",
  storageBucket: "reactnative-122db.appspot.com",
  messagingSenderId: "694042648226",
  appId: "1:694042648226:web:5d554701b2265b000f01fb",
  measurementId: "G-TD2TH2DQPP"
};

if(!firebase.app.length == 0){
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}

export default firebase;