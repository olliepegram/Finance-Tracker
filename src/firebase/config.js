import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: 'mymoney-12ca8.firebaseapp.com',
    projectId: 'mymoney-12ca8',
    storageBucket: 'mymoney-12ca8.appspot.com',
    messagingSenderId: '87640574518',
    appId: '1:87640574518:web:89cbc750077079b668a697',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
