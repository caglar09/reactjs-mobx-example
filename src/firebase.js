import firebase from 'firebase/app'
import firebaseStorage from 'firebase/firebase-storage'

import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDAyu1bX_izo9_UTE6I4YOItJo0al-OVk0",
    authDomain: "depixen-44e61.firebaseapp.com",
    databaseURL: "https://depixen-44e61.firebaseio.com",
    projectId: "depixen-44e61",
    storageBucket: "depixen-44e61.appspot.com",
    messagingSenderId: "731377037354",
    appId: "1:731377037354:web:106aaa0882ef3c670d1353"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
export default firebase