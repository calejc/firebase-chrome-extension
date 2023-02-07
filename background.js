import { initializeApp } from "./js/firebase/firebase-app.js"
import { getFirestore, collection, query, where, getDocs, addDoc } from "./js/firebase/firebase-firestore.js"

console.log("Hello from the background script!")

const firebaseConfig = {
    apiKey: "AIzaSyAl4KR_9lbCvmUO5wpL3jfjCitNGfQDX7g",
    authDomain: "fir-9intro.firebaseapp.com",
    projectId: "fir-9intro",
    storageBucket: "fir-9intro.appspot.com",
    messagingSenderId: "912650597382",
    appId: "1:912650597382:web:7d1f93ba390fe909c6ff87"
};

const firebase_app = initializeApp(firebaseConfig);
const db = getFirestore(firebase_app)

async function get_database_elements(db_name){
    const q = query(collection(db, db_name));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });
}

chrome.runtime.onMessage.addListener( (msg) => {
    console.log(msg)
    /*
        see in the popup.js where we added the command field to the message. checking that here.
        so will have different logic based on the command of incoming message
    */
    if (msg.command === 'GET') {
        get_database_elements('books')
    }
})