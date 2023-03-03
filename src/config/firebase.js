import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBDF_6s8iIxmF4XSa1fn3c6JyHym1iknj4',
  authDomain: 'caffeprototype.firebaseapp.com',
  projectId: 'caffeprototype',
  storageBucket: 'caffeprototype.appspot.com',
  messagingSenderId: '460032108953',
  appId: '1:460032108953:web:07d5b0fe2b94609d5ecb08',
  measurementId: 'G-F8P12K63G9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
