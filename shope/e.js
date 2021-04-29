// Your web app's Firebase configuration
          var firebaseConfig = {
            apiKey: "AIzaSyDVjzbTqXNzNsteN9FtUnLzG7J9G1h-Pkg",
            authDomain: "signup-de54d.firebaseapp.com",
            databaseURL: "https://signup-de54d.firebaseio.com",
            projectId: "signup-de54d",
            storageBucket: "signup-de54d.appspot.com",
            messagingSenderId: "313335894880",
            appId: "1:313335894880:web:367bf0a26531cbd0f1c405",
            measurementId: "G-TX374HDPKS"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
        
      // Database reference 
      var numberV, montantV, prix;

    function Ready(){
        numberV = document.getElementById('number').value;
        montantV = document.getElementById('montant').value;
    }
    //...........................select data.........................
    document.getElementById('select').onclick = function(){
        if(numberV ==""){
            document.getElementById('msg').innerHTML="Veuillez entrer votre pin";
        }else{
            
            Ready();
                firebase.database().ref(numberV).on('value',function(snapshot){;
                document.getElementById('montant').value= snapshot.val().BALANCE;
                document.getElementById("select").disabled = true;
                document.getElementById("insert").disabled = false;
            });
        }
    }

    document.getElementById('payer').addEventListener('click', function(){
        numberV = document.getElementById('number').value;
        montantV = document.getElementById('montant').value;
        var prix = document.getElementById('prix').value;
        var msg = document.getElementById
        var i = 0;
            if(numberV === ""){
              alert("Contactez l'administrateur pour avoir de Rmov");
              numberV.style.borderColor="red";
            }else if (montantV < prix) {
              document.getElementById('msg').innerHTML="Vous n'avez pas assez de Rmov sur votre compte"
              alert("Contactez l'administrateur pour avoir de Rmov");
            } else {
              
            }
          // The click Event