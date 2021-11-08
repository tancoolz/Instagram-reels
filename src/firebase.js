import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDrWYiEIVe98C1Vu70-efmfgjC9zxXvaYs",
    authDomain: "insta-reels-ccfa8.firebaseapp.com",
    projectId: "insta-reels-ccfa8",
    storageBucket: "insta-reels-ccfa8.appspot.com",
    messagingSenderId: "1086821135630",
    appId: "1:1086821135630:web:324d04206b0c9a7165d35f"
  };
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage()