const { initializeApp } = require("firebase-admin/app");

var admin = require("firebase-admin");
var serviceAccount = require("./config.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://senior1-d5603-default-rtdb.asia-southeast1.firebasedatabase.app/",
});
const firestore = admin.firestore();
const auth = admin.auth();

module.exports = { admin, firestore, auth };
