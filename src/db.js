import firebase from 'firebase'


const firebaseApp=firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()