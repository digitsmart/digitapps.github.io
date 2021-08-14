setTimeout(() => {
  document.getElementById('splash').classList.toggle('fade');
}, 1000);


var myIndex = 0;
        carousel();
        
        function carousel() {
          var i;
          var x = document.getElementsByClassName("mySlides");
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
          }
          myIndex++;
          if (myIndex > x.length) {myIndex = 1}    
          x[myIndex-1].style.display = "block";  
          setTimeout(carousel, 6000); // Change image every 2 seconds
        }


      // video playliste de la page home
      var video_player = document.getElementById("video_player"),
    links = video_player.getElementsByTagName('a');
    for (var i=0; i<links.length; i++) {
      links[i].onclick = handler;
}
function handler(e) {
	e.preventDefault();
	videotarget = this.getAttribute("href");
	filename = videotarget.substr(0, videotarget.lastIndexOf('.')) || videotarget;
	video = document.querySelector("#video_player video");
	video.removeAttribute("controls");
	video.removeAttribute("poster");
	source = document.querySelectorAll("#video_player video source");
	source[0].src = filename + ".mp4";
	source[1].src = filename + ".webm";
	video.load();
	video.play();    
}

        // boutton bar en bas
        function home(){
          var v = document.getElementById('videoPage');
          var h = document.getElementById('homePage');
          var p = document.getElementById('profilePage');
          var slide = document.getElementById('slide');
          var not = document.getElementById('not');
         
          if(h.style.display === "none"){
            h.style.display = "block";
            v.style.display = "none";
            p.style.display = "none";
            slide.style.display = "block";
            not.style.display = "block";
          } else{
            h.style.display = "block";
            v.style.display = "none";
            p.style.display = "none";
            slide.style.display = "block";
            not.style.display = "block";
          }
        }

        function profilepage(){
          var f = document.getElementById('facebook');
          var h = document.getElementById('homePage');
          var w = document.getElementById('whatsapp');
          var p = document.getElementById('profilePage');
          var slide = document.getElementById('slide');
          var not = document.getElementById('not');
         
          if(h.style.display === "none"){
            h.style.display = "none";
            f.style.display = "none";
            w.style.display = "none";
            w.style.display = "block";
            slide.style.display = "block";
            not.style.display = "block";
          } else{
            h.style.display = "none";
            f.style.display = "none";
            w.style.display = "none";
            w.style.display = "block";
            slide.style.display = "block";
            not.style.display = "block";
          }
        }

        function video(){
          var h = document.getElementById('homePage');
          var p = document.getElementById('profilePage');
          var v =document.getElementById('videoPage');
          var slide = document.getElementById('slide');
          var not = document.getElementById('not');
         
          if(h.style.display === "block"){
            h.style.display = "none";
            p.style.display = "none";
            v.style.display = "block";
            slide.style.display = "none";
            not.style.display = "none";
          } else{
            h.style.display = "none";
            p.style.display = "none";
            v.style.display = "block";
            slide.style.display = "none";
            not.style.display = "none";
          }
        }

        function profilepage(){
          var h = document.getElementById('homePage');
          var p = document.getElementById('profilePage');
          var v =document.getElementById('videoPage');
          var slide = document.getElementById('slide');
          var not = document.getElementById('not');
         
          if(h.style.display === "block"){
            h.style.display = "none";
            v.style.display = "none";
            p.style.display = "block";
            slide.style.display = "none";
            not.style.display = "none";
          } else{
            h.style.display = "none";
            v.style.display = "none";
            p.style.display = "block";
            not.style.display = "none";
          }
        }
        
        
        
    
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
        
        
        
        
      // Your web app's Firebase configuration

     var codeV, nameV, numberV;

function insert() {
     nameV = document.getElementById('name').value;
     codeV = document.getElementById('code').value;
     numberV = document.getElementById('number').value;
  if(nameV == ""){
    document.getElementById('message').innerHTML ="Votre nom";
    document.getElementById('message').style.color = '#fff';
    document.getElementById('message').style.background ="red";
  }else if (numberV == ""){
    document.getElementById('message').innerHTML ="Votre numero";
  }else if(codeV == ""){
    document.getElementById('message').innerHTML ="Votre code pays";
  }else{
    firebase.database().ref('Abonnez ftechplus/' + nameV).set({
        ANAME:  nameV,
        NUMBER: (codeV) + numberV,
    });
    document.getElementById('message').innerHTML ="Vous etes maimtenant abonnée";
    document.getElementById('message').style.color = '#fff';
    document.getElementById('message').style.background ="blue";
    document.getElementById('name').value = '';
    document.getElementById('number').value = '';
  }
 }