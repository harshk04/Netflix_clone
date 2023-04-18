  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyADP0Ss3p6fHsQgXq6hbRgbDgDtbx1886A",
    authDomain: "netflix-clone-61142.firebaseapp.com",
    databaseURL: "https://netflix-clone-61142-default-rtdb.firebaseio.com",
    projectId: "netflix-clone-61142",
    storageBucket: "netflix-clone-61142.appspot.com",
    messagingSenderId: "787572728881",
    appId: "1:787572728881:web:1535ca6e74f6bce7292110"
  };

 


  const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("contactForm");

var submit=document.querySelector("#submit");

submit.addEventListener('submit', submitForm )


function submitForm(e){
    e.preventDefault();
    var email=getElementVal("email_id")
    console.log(email)
}

const getElementVal = (id) =>{
    return document.getElementById(id).value;
}