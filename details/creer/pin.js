
 document.getElementById('payer').addEventListener('click', function(){
 numberV = document.getElementById('number').value;
 montantV = document.getElementById('montant').value;
 var prix = document.getElementById('prix').value;
 var price = 260;
 var i = 0;
 if(montantV > price){
   firebase.database().ref(numberV).update({
   NUMBER: numberV,
   BALANCE: montantV - price,
 })
 if (i == 0) {
     i = 1;
     var elem = document.getElementById("myBar");
     var width = 1;
     var id = setInterval(frame, 10);
     function frame() {
     if (width >= 100) {
     clearInterval(id);
     document.getElementById('montant').value = '';
     document.getElementById('number').value = '';
     window.location.assign("https://drive.google.com/uc?export=download&id=1CxITDRHlTGV2RXplz6gGHJo-fLN8nTZd");
     i = 0;
     } else {
     width++;
     elem.style.width = width + "%";
     }
     }
     }
 } else{
   document.getElementById('msg').innerHTML = "Vous n'avez pas assez de Rm"; 
 
 }
 
 });
 // The click Event