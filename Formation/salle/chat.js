// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA7xvnxxWkMhBonpj5AiZ5Hkkdv-jZAqDk",
    authDomain: "maliste-d4c03.firebaseapp.com",
    databaseURL: "https://maliste-d4c03.firebaseio.com",
    projectId: "maliste-d4c03",
    storageBucket: "maliste-d4c03.appspot.com",
    messagingSenderId: "552655235785",
    appId: "1:552655235785:web:a4b660caf5882e4be57b18",
    measurementId: "G-V6R9FPCSG1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// initialize database
const db = firebase.database();

// get user's data
const username = document.getElementById ('username').value;

// submit form
// listen for submit event on the form and call the postChat function
document.getElementById("message-form").addEventListener("submit", sendMessage);

// send message to db
function sendMessage(e) {
  e.preventDefault();

  // get values to be submitted
  const timestamp = Date.now();
  const username = document.getElementById ('username').value;
  const messageInput = document.getElementById("message-input");
  const message = messageInput.value;

  // clear the input box
  messageInput.value = "";
  //auto scroll to bottom
  document
    .getElementById("messages")
    .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

  // create db collection and send in the data
  db.ref("messages1/" + timestamp).set({
    username,
    message,
  });
}

// display the messages
// reference the collection created earlier
const fetchChat = db.ref("messages1/");

// check for new messages using the onChildAdded event listener
fetchChat.on("child_added", function (snapshot) {
  const messages1 = snapshot.val();
  const message = `<li class=${
    username === messages1.username ? "sent" : "receive"
  }><span>${messages1.username}: </span>${messages1.message}</li>`;
  // append the message on the page
  document.getElementById("messages").innerHTML += message;
});
