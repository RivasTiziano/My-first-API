import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyD2kAUFduyHkXt62PTjUfIux_I0JMGNo3g",
    authDomain: "login-system-9edd2.firebaseapp.com",
    projectId: "login-system-9edd2",
    storageBucket: "login-system-9edd2.appspot.com",
    messagingSenderId: "138590699944",
    appId: "1:138590699944:web:3af27c291bccf6cbe0dd9d"
  };

    const firebaseApp = firebase.initializeApp(firebaseConfig);

    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();

    export {auth,provider}