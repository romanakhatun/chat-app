import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = { timestampsInSnapshots: true };

const config = {
    apiKey: "AIzaSyDJTgfosbSX-m4S_eOyj6YsxYYKMCk1h1k",
    authDomain: "chat-romana.firebaseapp.com",
    databaseURL: "https://chat-romana.firebaseio.com",
    projectId: "chat-romana",
    storageBucket: "chat-romana.appspot.com",
    messagingSenderId: "323172979998",
    appId: "1:323172979998:web:5109fdebb2dc8f42eee50f"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;