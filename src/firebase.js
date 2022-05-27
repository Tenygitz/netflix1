
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAo8q_ciObCQ_vz58Xpdm5g--nN654weo4",
    authDomain: "netflix-5d22c.firebaseapp.com",
    projectId: "netflix-5d22c",
    storageBucket: "netflix-5d22c.appspot.com",
    messagingSenderId: "435190593342",
    appId: "1:435190593342:web:eb2bd0f510afa9d6fc5e6f",
    measurementId: "G-HF15HPVLYW"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebaseApp.auth();

export {auth};
export default db;