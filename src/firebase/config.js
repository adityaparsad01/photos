import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDDi4uTaBHYi25CtPQFAWxkvpYcu29OwQY",
  authDomain: "instagram-ce82d.firebaseapp.com",
  databaseURL: "https://instagram-ce82d.firebaseio.com",
  projectId: "instagram-ce82d",
  storageBucket: "instagram-ce82d.appspot.com",
  messagingSenderId: "234135475601",
  appId: "1:234135475601:web:d32d6a2af73e63eebc7630",
  measurementId: "G-HG3NMB60NS",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
