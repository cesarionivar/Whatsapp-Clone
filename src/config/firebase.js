import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAZPSsITxtol98dhSI9q82lrNsvAk1yTuU',
  authDomain: 'whatsapp-clone-bd13a.firebaseapp.com',
  projectId: 'whatsapp-clone-bd13a',
  storageBucket: 'whatsapp-clone-bd13a.appspot.com',
  messagingSenderId: '323563705073',
  appId: '1:323563705073:web:09bace523d72e53b254f50',
  measurementId: 'G-8MRDXWLX2J',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
