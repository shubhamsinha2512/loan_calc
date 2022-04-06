import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCakT9ixQNJ091wUdLvDSIF5xhLSZZKIl0",
    authDomain: "loan-calc-58af9.firebaseapp.com",
    projectId: "loan-calc-58af9",
    storageBucket: "loan-calc-58af9.appspot.com",
    messagingSenderId: "499630970914",
    appId: "1:499630970914:web:ac4993055bcec1feea927b",
    measurementId: "G-7P9PR7JNM0"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export const auth = getAuth()

export default db