import firebase from "firebase/app";
import "firebase/messaging";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClr6vfcXLBdJOiOR4YcDp1-fUmKw7nfIQ",
  authDomain: "push-835d4.firebaseapp.com",
  projectId: "push-835d4",
  storageBucket: "push-835d4.appspot.com",
  messagingSenderId: "45023312408",
  appId: "1:45023312408:web:f72c349a95418bced2216d",
  measurementId: "G-GZY361Z03C",
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
const { REACT_APP_VAPID_KEY } = process.env;
const publicKey = REACT_APP_VAPID_KEY;

export const getToken = async (setTokenFound) => {
  let currentToken = "";
  try {
    currentToken = await messaging.getToken({ vapidKey: publicKey });
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log("An error occurred while retrieving token.", error);
  }
  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
