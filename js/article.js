function home(){
  var h = document.getElementById('home');
  var aa = document.getElementById('aa');
 
  if(h.style.display === "none"){
    h.style.display = "block";
    aa.style.display = "none";
  } else{
    window.location.href = "../home.html";
  }
}

function searchFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById('myinput');
  filter = input.value.toUpperCase();
  ul = document.getElementById('wrapper');
  li = ul.getElementsByTagName('li');

  for(i=0 ; i< li.length; i++){
      a = li[i].getElementsByTagName('a')[0];
      if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
          li[i].style.display = "";
      }

      else{
          li[i].style.display = 'none';
          
      }
  }
  }


  function a(){
    var h = document.getElementById('home');
    var aa = document.getElementById('aa');
   
    if(aa.style.display === "none"){
      h.style.display = "none";
      aa.style.display = "block";
    } else{
      h.style.display = "none";
      aa.style.display = "block";
    }
  }