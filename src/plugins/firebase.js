import firebase from "firebase";
import "firebase/storage";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  });
}

export default firebase;
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const Auth = firebase.auth();
export const functions = firebase.functions();
