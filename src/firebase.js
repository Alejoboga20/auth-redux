import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDiPACj0TMQcplvDRiOVH6CwQEjqJkY718',
  authDomain: 'auth-redux-642fd.firebaseapp.com',
  projectId: 'auth-redux-642fd',
  storageBucket: 'auth-redux-642fd.appspot.com',
  messagingSenderId: '852976114993',
  appId: '1:852976114993:web:b5ac4202e00140d5ece410'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
