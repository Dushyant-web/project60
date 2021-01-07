import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyDeb4aq4tMxhWuogIxD97CvVjwrKXu0GN4",
    authDomain: "attendence-appfor-21-321-213.firebaseapp.com",
    databaseURL: "https://attendence-appfor-21-321-213-default-rtdb.firebaseio.com",
    projectId: "attendence-appfor-21-321-213",
    storageBucket: "attendence-appfor-21-321-213.appspot.com",
    messagingSenderId: "1059187731351",
    appId: "1:1059187731351:web:446b8941fb2c59ff9172d2",
    measurementId: "G-PKDVCVP259"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   
   export default firebase.database()