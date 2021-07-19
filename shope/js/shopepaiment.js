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
