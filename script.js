//This is where Firbase config will go
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAkC05iA_J2D8EQv_F0O0rPpy1UobAK7cM",
    authDomain: "chatapp-c37a8.firebaseapp.com",
    databaseURL: "https://chatapp-c37a8-default-rtdb.firebaseio.com",
    projectId: "chatapp-c37a8",
    storageBucket: "chatapp-c37a8.appspot.com",
    messagingSenderId: "104488981793",
    appId: "1:104488981793:web:dc47a4df1fc14f02cdda60"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//All our variable declarations
let database = firebase.database();
let name = document.querySelector("#username");
let input = document.querySelector("#message");


//Code to PUSH data to the database
input.addEventListener('keypress', function(event) {
    if(event.key == "Enter") {
     database.ref("messages").push({
       name: name.value, 
       message: input.value
     })
   input.value="";
   }
 })

//Code to RETRIEVE data from the database

database.ref("messages").on('child_added', function(message) {
    let messages = document.querySelector("#messages");
    let name = message.val().name;
    let value = message.val().message;
    let div = document.createElement("div");
    let span = document.createElement("span");
    span.innerHTML = "@" + name;
    let p = document.createElement("p");
    p.innerHTML = value; 
    div.appendChild(span);
    div.appendChild(p);
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight; 
  })