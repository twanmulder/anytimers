import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDTHxDP0weOVqlg5dERj3ApKHwK5CdF7m8",
  authDomain: "anytimers-16035.firebaseapp.com",
  databaseURL: "https://anytimers-16035.firebaseio.com",
  projectId: "anytimers-16035",
  storageBucket: "anytimers-16035.appspot.com",
  messagingSenderId: "821258068751"
};
const fire = firebase.initializeApp(config);
export default fire;
