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

        // send message to whatsapp en tant que client
        function gotowhatsapp() {
    
          var name = document.getElementById("name").value;
          var phone = document.getElementById("phone").value;
          var email = document.getElementById("email").value;
          var service = document.getElementById("service").value;
      
          var url = "https://wa.me/918789529215?text=" 
          + "Name: " + name + "%0a"
          + "Phone: " + phone + "%0a"
          + "Email: " + email  + "%0a"
          + "Service: " + service; 
      
          window.open(url, '_blank').focus();
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
            slide.style.display = "none";
            not.style.display = "none";
          }
        }
        

        