import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAdQopMIzTUAIXNVpM0Cjb4pNTW78uhvZY",
  authDomain: "tasktodo-5803b.firebaseapp.com",
  databaseURL: "https://tasktodo-5803b.firebaseio.com",
  projectId: "tasktodo-5803b",
  storageBucket: "tasktodo-5803b.appspot.com",
  messagingSenderId: "886756357928",
  appId: "1:886756357928:web:ee9dcff43c2bff9408421d"
});

const firestore = firebase.firestore();
export default firestore;