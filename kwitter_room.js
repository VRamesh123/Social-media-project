var firebaseConfig = {
      apiKey: "AIzaSyBJyMrU2XAv7VqNNw_XszmlHWWrXZWQHwQ",
      authDomain: "social-medi-app-936b2.firebaseapp.com",
      databaseURL: "https://social-medi-app-936b2-default-rtdb.firebaseio.com",
      projectId: "social-medi-app-936b2",
      storageBucket: "social-medi-app-936b2.appspot.com",
      messagingSenderId: "449011811265",
      appId: "1:449011811265:web:265f2425b2d9dc55102540"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room names - " + Room_names);
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirecttoroom(this.id)'> #" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


user_name =  localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding rooms name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
      
}

function logOut() {
      window.location = "index.html";
}