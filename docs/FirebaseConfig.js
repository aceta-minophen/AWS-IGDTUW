// Initialize Firebase
var firebaseConfig = {
  // Add your Firebase configuration here
  apiKey: "AIzaSyBsHT2jsArKo8Z_71X22824XURpZ-gigcs",
  authDomain: "aws-cloud-club-igdtuw.firebaseapp.com",
  projectId: "aws-cloud-club-igdtuw",
  storageBucket: "aws-cloud-club-igdtuw.appspot.com",
  messagingSenderId: "601200189444",
  appId: "1:601200189444:web:8fe135d5dbb632c7f39551",
  // You can find your configuration in the Firebase console
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the Realtime Database
var database = firebase.database();
