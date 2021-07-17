
//........  faire apparaitre les details du shope.....................
function card() {
  var passWindows = document.getElementById("passWindows");
  var lien = document.getElementById("lien");
  var utilisateur =document.getElementById('utilisateur');
  var sectioncard = document.getElementById('sectioncard');
  if (sectioncard.style.display === "block") {
    sectioncard.style.display = "none";
    passWindows.style.display = "none";
    lien.style.display = "none";
    utilisateur.style.display = "none";
  } else {
    passWindows.style.display = "none";
    lien.style.display = "none";
    utilisateur.style.display = "none";
    sectioncard.style.display = "block";
    sectioncard.style.display = "block";
  }
}
//........  crack mot de pass windows.....................
function acheterPass() {
  var passWindows = document.getElementById("passWindows");
  var formPass = document.getElementById('formPass');
  if (passWindows.style.display === "block") {
    formPass.style.display = "block";
    passWindows.style.display = "none";
  } else {
    formPass.style.display = "block";
    passWindows.style.display = "none";
  }
}

//........  html  et css.....................
function acheterPass() {
  var passWindows = document.getElementById("passWindows");
  var formPass = document.getElementById('formPass');
  if (passWindows.style.display === "block") {
    formPass.style.display = "block";
    passWindows.style.display = "none";
  } else {
    formPass.style.display = "block";
    passWindows.style.display = "none";
  }
}