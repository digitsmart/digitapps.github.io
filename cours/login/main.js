      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyA7xvnxxWkMhBonpj5AiZ5Hkkdv-jZAqDk",
        authDomain: "maliste-d4c03.firebaseapp.com",
        databaseURL: "https://maliste-d4c03.firebaseio.com",
        projectId: "maliste-d4c03",
        storageBucket: "maliste-d4c03.appspot.com",
        messagingSenderId: "552655235785",
        appId: "1:552655235785:web:a4b660caf5882e4be57b18",
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
        
      var firebaseRef = firebase.database().ref().child('login');
      
      firebaseRef.once("value").then(function(snapshot){
        var loginInfo=snapshot.val();
        document.getElementById("login").addEventListener("click",function(){
          var username = document.getElementById("username");
          var password = document.getElementById("pass");
          if (username.value==loginInfo.username && password.value==loginInfo.password){
            location.replace("home.html");
          }else if(username.value!=loginInfo.username){
            username.style.borderColor="red";
          }else if(password.value!=loginInfo.password){
            password.style.borderColor="red";
          }
        });
      });

      document.getElementById('pass').addEventListener("input",function(){
        document.getElementById("pass").style.borderColor="#ccc";
      });
      document.getElementById('username').addEventListener("input",function(){
        document.getElementById("username").style.borderColor="#ccc";
      });
