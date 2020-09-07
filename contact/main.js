 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyDSDWqpaXcwd2IVvq4vTww9aLYJp_P8kl0",
  authDomain: "digitsmartplus-1ce45.firebaseapp.com",
  databaseURL: "https://digitsmartplus-1ce45.firebaseio.com",
  projectId: "digitsmartplus-1ce45",
  storageBucket: "digitsmartplus-1ce45.appspot.com",
  messagingSenderId: "175557613241",
  appId: "1:175557613241:web:5662da43aa25c439c5ed68"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



// Reference messages collection
var messagesRef = firebase.database('https://digitsmartplus-1ce45.firebaseio.com').ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}