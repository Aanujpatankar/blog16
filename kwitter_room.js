
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCagHnrGKK01QhlTMmsScWiaWXDmnCCwJ8",
      authDomain: "twitter-6da3e.firebaseapp.com",
      databaseURL: "https://twitter-6da3e-default-rtdb.firebaseio.com",
      projectId: "twitter-6da3e",
      storageBucket: "twitter-6da3e.appspot.com",
      messagingSenderId: "509708200857",
      appId: "1:509708200857:web:ccc55c11105499b62c0108",
      measurementId: "G-L1R1RG1EYK"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML="wellcome"+ user_name+ "!"
     function addRoom(){
     room_name=document.getElementById("room_name").value;      
     
     firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" })
     ;
     localStorage.setItem("room_name",room_name);
     window.location="kwitter_page.html"
     }

     
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML+=row
      });});}
      getData();

function redirectToRoomName(name){
console.log(name)
localStorage.setItem("room_name",name)
window.location="kwitter_page.html"
}
function logout(){
localStorage.removeItem("room_name")
localStorage.removeItem("user_name")
window.location="index.html"
}
      //Start code

      //End code

