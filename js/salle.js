
function myform(){  
  var numberV = document.getElementById('number').value;
  var referV = document.getElementById('refer').value;
  var i = 1;
  if (numberV.length < 6 ){  
    alert("Password must be at least 6 characters long.");  
    return false;  
    } if (referV.length < 6){  
      alert("Refer must be at least 6 characters long.");  
      return false;  
      } else{
      firebase.database().ref('Cours/'+numberV).set({
        Refer: referV,
      })
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

  function firstp() {
    var home = document.getElementById("home");
    var first = document.getElementById("first");
    var second = document.getElementById("second");
    var second1 = document.getElementById("second1");
    var second2 = document.getElementById("second2");
    var navig = document.getElementById('navig');

    if (home.style.display === "none") {
      home.style.display = "block";
      first.style.display = "none";
      second.style.display = "none";
      second1.style.display = "none";
      second2.style.display = "none";
      navig.style.display = "none";
    } else {
      home.style.display = "block";
      first.style.display = "none";
      second.style.display = "none";
      second1.style.display = "none";
      second2.style.display = "none";
      navig.style.display = "none";
    }
  }

  function firstn() {
    var home = document.getElementById("home");
    var first = document.getElementById("first");
    var second = document.getElementById("second");
    var second1 = document.getElementById("second1");
    var second2 = document.getElementById("second2");
    if (first.style.display === "block") {
      home.style.display = "none";
      first.style.display = "none";
      second.style.display = "block";
      second1.style.display = "none";
      second2.style.display = "none";
      
    } else {
      home.style.display = "none";
      first.style.display = "none";
      second.style.display = "block";
      second1.style.display = "none";
      second2.style.display = "none";
    }
  }

  function secondn() {
    var home = document.getElementById("home");
    var first = document.getElementById("first");
    var second = document.getElementById("second");
    var second1 = document.getElementById("second1");
    var second2 = document.getElementById("second2");
    if (second.style.display === "block") {
      home.style.display = "none";
      first.style.display = "none";
      second.style.display = "none";
      second1.style.display = "block";
      second2.style.display = "none";
      a.stop();
    } else {
      home.style.display = "none";
      first.style.display = "none";
      second.style.display = "none";
      second1.style.display = "block";
      second2.style.display = "none";
      a.stop();
    }
  }

  function secondp() {
    var home = document.getElementById("home");
    var first = document.getElementById("first");
    var second = document.getElementById("second");
    var second1 = document.getElementById("second1");
    var second2 = document.getElementById("second2");
    if (second.style.display === "block") {
      home.style.display = "none";
      first.style.display = "block";
      second.style.display = "none";
      second1.style.display = "none";
      second2.style.display = "none";
      a.stop();
    } else {
      home.style.display = "none";
      first.style.display = "block";
      second.style.display = "none";
      second1.style.display = "none";
      second2.style.display = "none";
      a.stop();
    }
  }

  function second1n() {
    var home = document.getElementById("home");
    var first = document.getElementById("first");
    var second = document.getElementById("second");
    var second1 = document.getElementById("second1");
    var second2 = document.getElementById("second2");  
    if (second1.style.display === "block") {
      home.style.display = "none";
      first.style.display = "none";
      second.style.display = "none";
      second1.style.display = "none";
      second2.style.display = "block";
    } else {
      home.style.display = "none";
      first.style.display = "none";
      second.style.display = "none";
      second1.style.display = "none";
      second2.style.display = "block";
    }
  }

  function second1p() {
    var home = document.getElementById("home");
    var first = document.getElementById("first");
    var second = document.getElementById("second");
    var second1 = document.getElementById("second1");
    var second2 = document.getElementById("second2");  
    if (second1.style.display === "block") {
      home.style.display = "none";
      first.style.display = "none";
      second.style.display = "block";
      second1.style.display = "none";
      second2.style.display = "none";
    } else {
      home.style.display = "none";
      first.style.display = "none";
      second.style.display = "block";
      second1.style.display = "none";
      second2.style.display = "none";
    }
  }
  function second2() {
    var home = document.getElementById("home");
    var first = document.getElementById("first");
    var second = document.getElementById("second");
    var second1 = document.getElementById("second1");
    var second2 = document.getElementById("second2"); 
    if (second2.style.display === "none") {
      home.style.display = "none";
      first.style.display = "none";
      second.style.display = "none";
      second1.style.display = "none";
      second2.style.display = "block";
    } else {
      home.style.display = "none";
      first.style.display = "none";
      second.style.display = "none";
      second1.style.display = "none";
      second2.style.display = "block";
    }
  }

  function second2p() {
    var home = document.getElementById("home");
    var first = document.getElementById("first");
    var second = document.getElementById("second");
    var second1 = document.getElementById("second1");
    var second2 = document.getElementById("second2"); 
    if (second2.style.display === "block") {
      home.style.display = "none";
      first.style.display = "none";
      second.style.display = "none";
      second1.style.display = "block";
      second2.style.display = "none";
    } else {
      home.style.display = "none";
      first.style.display = "none";
      second.style.display = "none";
      second1.style.display = "block";
      second2.style.display = "none";
    }
  }
