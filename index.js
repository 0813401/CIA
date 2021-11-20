// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiTTx6ZNggajmMn_R_xUQ4H1Pe73Np-s0",
  authDomain: "ciateam-6d554.firebaseapp.com",
  projectId: "ciateam-6d554",
  storageBucket: "ciateam-6d554.appspot.com",
  messagingSenderId: "892094395466",
  appId: "1:892094395466:web:a9fa12d743357b910522b3",
  measurementId: "G-Z5JXQMSE3V"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
// const analytics = getAnalytics(app);
const db = firebase.firestore()

// var account = "89113000"; //post 
// var password = "00891130";

// db.collection('users')
//   .add({
//     account: account, //欄位名稱，欄位資料
//     password: password
//   })
//   .then(function(docRef) {
//     console.log('Document written with ID: ', docRef.id)
//   })
//   .catch(function(error) {
//     console.error('Error adding document: ', error)
//   })

// var ref = db.collection("users");
// // var n = ref.size();
// ref.get().then(querySnapshot => {
//     querySnapshot.forEach(doc => {
//       // console.log(doc.id, doc.data());
//       // console.log(doc.id)
//       // console.log(doc.data());
//     });
//   });