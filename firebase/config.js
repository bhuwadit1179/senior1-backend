const firebase = require("firebase/app");
const auth = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyDsg-L9MUXikPcNtZ-h211Iei24W2_HBS0",
  authDomain: "senior1-d5603.firebaseapp.com",
  projectId: "senior1-d5603",
  storageBucket: "senior1-d5603.appspot.com",
  messagingSenderId: "560569072419",
  appId: "1:560569072419:web:00d1c189e89fed8b586a96",
  measurementId: "G-WQ12LTXLBN",
};

const fb = firebase.initializeApp(firebaseConfig);
const firebaseAuth = auth.getAuth();

module.exports = { fb, firebaseAuth };
