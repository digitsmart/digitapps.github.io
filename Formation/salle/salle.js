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

  function suiv() {
    var home = document.getElementById("home");
    var first = document.getElementById("first");
    var second = document.getElementById("second");
    if (first.style.display === "block") {
      home.style.display = "none";
      first.style.display = "none";
      second.style.display = "block";
    } else {
      home.style.display = "none";
      first.style.display = "none";
      second.style.display = "block";
    }
  }
  function pre() {
    var home = document.getElementById("home");
    var first = document.getElementById("first");
    var second = document.getElementById("second");
    var navig = document.getElementById("navig");
    if (first.style.display === "block") {
      home.style.display = "block";
      first.style.display = "none";
      navig.style.display = "none";
      second.style.display = "none";
    } else if (second.style.display === "block") {
      home.style.display = "none";
      first.style.display = "block";
      second.style.display = "none";

    }
  }