function produit() {
    var de = document.getElementById("detail");
    var paie = document.getElementById("b");
    if (de.style.display === "block") {
      de.style.display = "none";
      paie.style.display = "block";
    } else {
      de.style.display = "none";
      paie.style.display = "block";
    }
    }

    function select() {
        var check = document.getElementById("select");
        var conf = document.getElementById("insert");
        if (check.style.display === "block") {
          check.style.display = "none";
          conf.style.display = "block";
        } else {
          check.style.display = "none";
          conf.style.display = "block";
        }
        }