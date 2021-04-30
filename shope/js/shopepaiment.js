
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
  var lien = document.getElementById("lien");
  var utilisateur =document.getElementById('utilisateur');
  var formPass = document.getElementById('formPass');
  var text= document.getElementById('text');
  if (formPass.style.display === "none") {
    form.style.display = "block";
    sectioncard.style.display = "none";
    text.style.display = "none";
    passWindows.style.display = "block";
    lien.style.display = "none";
    utilisateur.style.display = "none";
  } else {
    formPass.style.display = "block";
    text.style.display = "none";
    passWindows.style.display = "block";
    lien.style.display = "none";
    utilisateur.style.display = "none";
  }
}





//........ gagner de l'argent avec des liens.....................
function acheterLien() {
  var passWindows = document.getElementById("passWindows");
  var lien = document.getElementById("lien");
  var utilisateur =document.getElementById('utilisateur');
  var formLien = document.getElementById('formLien');
  var textLien= document.getElementById('textLien');
  if (formLien.style.display === "none") {
    formLien.style.display = "block";
    sectioncard.style.display = "none";
    textLien.style.display = "none";
    passWindows.style.display = "none";
    lien.style.display = "block";
    utilisateur.style.display = "none";
  } else {
    formLien.style.display = "block";
    textLien.style.display = "none";
    passWindows.style.display = "none";
    lien.style.display = "block";
    utilisateur.style.display = "none";
  }
}


//........ creer un nom d'utilisateur sur windows.....................
function acheterUtilisateur() {
  var passWindows = document.getElementById("passWindows");
  var lien = document.getElementById("lien");
  var utilisateur =document.getElementById('utilisateur');
  var formUtilisateur = document.getElementById('formUtilisateur');
  var textutilisateur= document.getElementById('textutilisateur');
  if (formUtilisateur.style.display === "none") {
    formUtilisateur.style.display = "block";
    sectioncard.style.display = "none";
    textutilisateur.style.display = "none";
    passWindows.style.display = "none";
    lien.style.display = "block";
    utilisateur.style.display = "none";
  } else {
    formUtilisateur.style.display = "block";
    textutilisateur.style.display = "none";
    passWindows.style.display = "none";
    lien.style.display = "none";
    utilisateur.style.display = "block";
  }
}


function acheterblog() {
  var passWindows = document.getElementById("passWindows");
  var lien = document.getElementById("lien");
  var utilisateur =document.getElementById('utilisateur');
  var formPass = document.getElementById('formPass');
  var text= document.getElementById('text');
  if (formPass.style.display === "none") {
    form.style.display = "block";
    sectioncard.style.display = "none";
    text.style.display = "none";
    passWindows.style.display = "block";
    lien.style.display = "none";
    utilisateur.style.display = "none";
  } else {
    formPass.style.display = "block";
    text.style.display = "none";
    passWindows.style.display = "block";
    lien.style.display = "none";
    utilisateur.style.display = "none";
  }
}