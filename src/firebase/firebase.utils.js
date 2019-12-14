import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAx3AGsyMBCulV1_0-KSRJgfnSIXyXSwLw',
  authDomain: 'remontada-db.firebaseapp.com',
  databaseURL: 'https://remontada-db.firebaseio.com',
  projectId: 'remontada-db',
  storageBucket: 'remontada-db.appspot.com',
  messagingSenderId: '1023941467506',
  appId: '1:1023941467506:web:898d5a683a6251159611eb',
  measurementId: 'G-GL64ZW7LGC'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
