import firebase from "firebase";

// const {
//   REACT_APP_FIREBASE_API_KEY,
//   REACT_APP_FIREBASE_AUTH_DOMAIN,
//   REACT_APP_FIREBASE_PROJECT_ID,
//   REACT_APP_FIREBASE_STORAGE_BUCKET,
//   REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   REACT_APP_FIREBASE_API_ID,
// } = process.env;

// const firebaseConfig = {
//   apiKey: REACT_APP_FIREBASE_API_KEY,
//   authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: REACT_APP_FIREBASE_API_ID,
// };

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
const messagesRef = database.ref("messages");

export const pushMessage = ({ name, text }) => {
  messagesRef.push({ name, text });
};
