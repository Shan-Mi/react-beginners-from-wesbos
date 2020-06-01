import Rebase from "re-base";
//allow us to mirror our data to firebase
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBofDJU1vEdjIRXH2cg71xmnduSzCDXsHA",
  authDomain: "catch-of-the-day-shanm.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-shanm.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());
//firebaseApp.database() will return the base that we need

// this is a named export
export { firebaseApp };

// this is a default export
export default base;
