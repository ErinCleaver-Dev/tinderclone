import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyBPCTqjmLbG7xvdcamZGcSTov7UO8pgyxE",
    authDomain: "tender-clone-c120a.firebaseapp.com",
    projectId: "tender-clone-c120a",
    storageBucket: "tender-clone-c120a.appspot.com",
    messagingSenderId: "68609163752",
    appId: "1:68609163752:web:917a8ebc8b45493ffa245d",
    measurementId: "G-XYLFFRPS7S"
});

const auth = firebaseApp.auth();
const provider = new firebaseApp.auth.GoogleAuthProvider();

export {provider, auth}
