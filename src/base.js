import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD_qzXcZzbr_07imZZRAzpo70fwrI6iCbU",
  authDomain: "react-for-beginners-jc.firebaseapp.com",
  databaseURL: "https://react-for-beginners-jc.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
