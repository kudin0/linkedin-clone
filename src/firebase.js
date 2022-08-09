import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyALqtXp77xvE6H7IUR2mSJt-JPmu46xOpo",
    authDomain: "linkedin-clone-db7e6.firebaseapp.com",
    projectId: "linkedin-clone-db7e6",
    storageBucket: "linkedin-clone-db7e6.appspot.com",
    messagingSenderId: "450782366586",
    appId: "1:450782366586:web:355c66f31779521ffc24c3",
    measurementId: "G-J6FERBL9LQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };