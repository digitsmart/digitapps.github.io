function myform(){  
  var number = document.getElementById('number').value;

  if (number.length < 6){  
    alert("Password must be at least 6 characters long.");  
    return false;  
    }  
  }  

function aller() {
    var home = document.getElementById("home");
    var first = document.getElementById("first");
    var navig = document.getElementById('navig');
    if (home.style.display === "block") {
      home.style.display = "none";
      navig.style.display = "block";
      first.style.display = "block";
    } else {
      first.style.display = "block";
      home.style.display = "none";
      navig.style.display = "block";
    }
  }

  function back() {
    var home = document.getElementById("home");
    var first = document.getElementById("first");
    var second = document.getElementById("second");
    var three = document.getElementById("three");
    var navig = document.getElementById('navig');
    if (home.style.display === "none") {
      home.style.display = "block";
      first.style.display = "none";
      second.style.display = "none";
      three.style.display = "none";
      navig.style.display = "none";
    } else {
      home.style.display = "block";
      first.style.display = "none";
      second.style.display = "none";
      three.style.display = "none";
      navig.style.display = "none";
    }
  }

  function first() {
    var home = document.getElementById("home");
    var first = document.getElementById("first");
    var second = document.getElementById("second");
    var three = document.getElementById("three");
    if (first.style.display === "none") {
      home.style.display = "none";
      first.style.display = "block";
      second.style.display = "none";
      three.style.display = "none";
    } else {
      home.style.display = "none";
      first.style.display = "block";
      second.style.display = "none";
      three.style.display = "none";
    }
  }

  function second() {
    var home = document.getElementById("home");
    var first = document.getElementById("first");
    var second = document.getElementById("second");
    var three = document.getElementById("three");
    if (second.style.display === "none") {
      home.style.display = "none";
      first.style.display = "none";
      second.style.display = "block";
      three.style.display = "none";
    } else {
      home.style.display = "none";
      first.style.display = "none";
      second.style.display = "block";
      three.style.display = "none";
    }
  }

  function thre() {
    var home = document.getElementById("home");
    var first = document.getElementById("first");
    var second = document.getElementById("second");
    var three = document.getElementById("three");
    if (three.style.display === "none") {
      home.style.display = "none";
      first.style.display = "none";
      second.style.display = "none";
      three.style.display = "block";
    } else {
      home.style.display = "none";
      first.style.display = "none";
      second.style.display = "none";
      three.style.display = "block";
    }
  }
  