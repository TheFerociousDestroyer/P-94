
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyB2GtJQnDz3iDKwqoLYu-p3XxjKmwvE144",
      authDomain: "p-93-2f113.firebaseapp.com",
      projectId: "p-93-2f113",
      databaseURL: "https://p-93-2f113-default-rtdb.firebaseio.com",
      storageBucket: "p-93-2f113.appspot.com",
      messagingSenderId: "291304763180",
      appId: "1:291304763180:web:361eb04b1951a763a14689"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
