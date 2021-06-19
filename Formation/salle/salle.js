function aller() {
    var home = document.getElementById("home");
    var first = document.getElementById("first");
    if (first.style.display === "none") {
      first.style.display = "block";
      home.style.display = "none";
    } else {
      first.style.display = "none";
    }
  }