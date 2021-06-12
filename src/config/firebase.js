import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCTqeQPUSTS5q6MS4syrS9-S3gNs5T5Cjc",
    authDomain: "chat-app-fa560.firebaseapp.com",
    projectId: "chat-app-fa560",
    storageBucket: "chat-app-fa560.appspot.com",
    messagingSenderId: "651946073495",
    appId: "1:651946073495:web:3571dda51b7fb5f21678d2"
}

firebase.initializeApp(firebaseConfig)

export default firebase