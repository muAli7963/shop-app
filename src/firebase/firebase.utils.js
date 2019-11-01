import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';


const Config = {
    apiKey: "AIzaSyAjdCd7ewZmFpU0HnhfRn-_OrGrkCjF16U",
    authDomain: "shop-app-49707.firebaseapp.com",
    databaseURL: "https://shop-app-49707.firebaseio.com",
    projectId: "shop-app-49707",
    storageBucket: "shop-app-49707.appspot.com",
    messagingSenderId: "1068431542586",
    appId: "1:1068431542586:web:0c08ecfe20cb2d3907a803",
    measurementId: "G-2HWC5RLB93"
  };
  // Initialize Firebase
  firebase.initializeApp(Config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
