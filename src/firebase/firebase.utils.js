import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey            : 'AIzaSyBqrAowcEnMG-8zTpAkkUTTgF_uJ8pbTN4',
  authDomain        : 'e-commerce-react-8120b.firebaseapp.com',
  databaseURL       : 'https://e-commerce-react-8120b.firebaseio.com',
  projectId         : 'e-commerce-react-8120b',
  storageBucket     : 'e-commerce-react-8120b.appspot.com',
  messagingSenderId : '269144628055',
  appId             : '1:269144628055:web:ba7a2e0bbffad14006fc12',
  measurementId     : 'G-1H8HES9BKM'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
