// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDx1ANJQsKeq19gBorFvgKGsS58uEgJJpg',
  authDomain: 'miniblog-88d87.firebaseapp.com',
  projectId: 'miniblog-88d87',
  storageBucket: 'miniblog-88d87.appspot.com',
  messagingSenderId: '950758704905',
  appId: '1:950758704905:web:05565a3c1f4100289a75d8'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
