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