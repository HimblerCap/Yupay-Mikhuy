import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyBqTyH74qRPurMFm0rMDLCJFPZYblUIaXg",
  authDomain: "yupay-mikhuy.firebaseapp.com",
  projectId: "yupay-mikhuy",
  storageBucket: "yupay-mikhuy.appspot.com",
  messagingSenderId: "107020343756",
  appId: "1:107020343756:web:27352a0c4543e77e166569",
  measurementId: "G-DL6ZB9YBQ8"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({synchronizeTabs:!0}).catch(()=>{console.warn("DB offline support not available")})
export default{
  notificationSupported:firebase.messaging.isSupported(),
  messaging: (firebase.messaging.isSupported())?firebase.messaging():null,
  firestore: firebase.firestore(),
  auth:firebase.auth(),
  storage:firebase.storage(),
};




