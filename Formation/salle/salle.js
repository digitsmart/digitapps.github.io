function aller() {
    var home = document.getElementById("home");
    var first = document.getElementById("first");
    if (home.style.display === "block") {
      home.style.display = "none";
      first.style.display = "block";
    } else {
      first.style.display = "block";
      home.style.display = "none";
    }
  }

  function first() {
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
    if (first.style.display === "none") {
      home.style.display = "none";
      first.style.display = "block";
      second.style.display = "none";
    } else {
      home.style.display = "none";
      first.style.display = "block";
      second.style.display = "none";
    }
  }