import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBULYOgMOCHLrDq_Spqk9GkabeNp_LI-JY",
    authDomain: "socar-3f43a.firebaseapp.com",
    projectId: "socar-3f43a",
    storageBucket: "socar-3f43a.appspot.com",
    messagingSenderId: "871969537482",
    appId: "1:871969537482:web:a512c8eec1ba3f0845a333"
};

export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_DB = getFirestore(FIREBASE_APP)
