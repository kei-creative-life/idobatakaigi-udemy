import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB2UN0R22LLGC1DQGlTNJfWZInIUq0nqjk",
  authDomain: "idobatakaigi-udemy-f5d25.firebaseapp.com",
  projectId: "idobatakaigi-udemy-f5d25",
  storageBucket: "idobatakaigi-udemy-f5d25.appspot.com",
  messagingSenderId: "283688350215",
  appId: "1:283688350215:web:b726d4f2fad0722b28b0a2",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref("message");

export const pushMessage = ({ name, text }) => {
  messageRef.push({ name, text });
};
