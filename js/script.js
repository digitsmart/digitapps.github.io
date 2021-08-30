function inscription(){
  var home = document.getElementById('home');
  var profile = document.getElementById('profile');
  var signup = document.getElementById('signup');
  var receive = document.getElementById('receive');
  var about = document.getElementById('about');
  if(home.style.display = 'bock'){
    home.style.display = 'none';
    signup.style.display = 'block';
    profile.style.display = 'none';
    receive.style.display = 'none';
    about.style.display = 'none';
  }


}
function h(){
  var home = document.getElementById('home');
  var profile = document.getElementById('profile');
  var signup = document.getElementById('signup');
  var receive = document.getElementById('receive');
  var about = document.getElementById('about');
  if(home.style.display = 'none'){
    home.style.display = 'block';
    signup.style.display = 'none';
    profile.style.display = 'none';
    receive.style.display = 'none';
    about.style.display = 'none';
  }


}
function profile(){
  var home = document.getElementById('home');
  var profile = document.getElementById('profile');
  var signup = document.getElementById('signup');
  var receive = document.getElementById('receive');
  var about = document.getElementById('about');
  if(profile.style.display = 'none'){
    home.style.display = 'none';
    signup.style.display = 'none';
    profile.style.display = 'block';
    receive.style.display = 'none';
    about.style.display = 'none';
  }


}

setTimeout(() => {
  document.getElementById('splash').classList.toggle('fade');
}, 2000);

//formulaire d'inscription
 // Your web app's Firebase configuration

 var codeV, nameV, emailV, numberV, adressV, infosV;

 function enregistrer() {
      nameV = document.getElementById('name').value;
      codeV = document.getElementById('code').value;
      emailV = document.getElementById('email').value;
      numberV = document.getElementById('number').value;
      adressV = document.getElementById('adress').value;
      infosV = document.getElementById('infos').value;
   if(nameV == ""){
     document.getElementById('message').innerHTML ="Votre nom";
     document.getElementById('message').style.color = '#fff';
     document.getElementById('message').style.background ="red";
   }else if (numberV == ""){
     document.getElementById('message').innerHTML ="Votre numero";
   }else if(codeV == ""){
     document.getElementById('message').innerHTML ="Votre code pays";
   }else if(adressV == ""){
    document.getElementById('message').innerHTML ="Votre adresse";
  }else{
     firebase.database().ref('Cours google drive/' + nameV).set({
         ANAME:  nameV,
         Email: emailV,
         NUMBER: (codeV) + numberV,
         ADRESSE: adressV,
         INFOS: infosV,
     });
     document.getElementById('message').innerHTML ="Vous etes maimtenant abonnée";
     document.getElementById('message').style.color = '#fff';
     document.getElementById('message').style.background ="blue";
     document.getElementById('name').value = '';
     document.getElementById('email').value = '';
     document.getElementById('number').value = '';
     document.getElementById('adress').value = '';
   }
  }