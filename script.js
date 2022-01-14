const admin = require("firebase-admin");
// this file can be retrieved from Firebase settings
const serviceAccount = require("./serviceAccount.json");

const getFirestore = () => admin.firestore();

const defaultProject = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // You can find more details here: Firebase project -> Project settings -> Service accounts
  databaseURL: "https://appsome-solutions.firebaseio.com"
});

let firestore = getFirestore(defaultProject);

console.log('Read the collection');
// profile_scrapper ia an example collection name
firestore.collection('profile_scrapper')
  .get()
  .then(snapshot =>
    snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  }));
