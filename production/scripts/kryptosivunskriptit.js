
    // Heikko implementaatio toistaa itseään. napsautusTapahtuma noutaa HTML elementin id:n perusteella,
    // nouda tiedot funktio saa syötteeksi elementin määritteeen "value" ja tulevaisuudessa palauttaa JSON objektin
    // joka toimii taas syötteenä vaihdaTiedot funktiolle.
    function napsautusTapahtuma1() {

    /*var nappula = document.getElementById("nappula1");
      var tiedotJSON = noudaTiedot(nappula.value);
      vaihdaTiedot(tiedotJSON);*/

        $.ajax({

            url : 'http://localhost/php/echo.php',
            type : 'POST',

     success : function (result) {

                var object = result;
                document.write(result);
                console.log (result);
     },
     error : function () {
        console.log ('error');
     }

        });

    }

    function napsautusTapahtuma2() {
      var nappula = document.getElementById("nappula2");
      //var tiedotJSON = noudaTiedot(nappula.value);
      //vaihdaTiedot(tiedotJSON);
    }

    function napsautusTapahtuma3() {
      var nappula = document.getElementById("nappula3");
      //var tiedotJSON = noudaTiedot(nappula.value);
      //vaihdaTiedot(tiedotJSON);
    }


    // Testaamatonta koodia tästä etenpäin noudaTiedot
    function noudaTiedot(nappulanID) {
      
    	
        /*$.ajax({
                type: 'POST',
                url: 'http://localhost/php/noudaTiedot.php',
                data:{ID : nappulanID},
                success: function(vastaus){
                return $.parseJSON(vastaus);
                }
        })
    }
       // Yksinkertaisesti JSON objecti, joka sisältää JavaScript arvoja rikotaan yksittäisiksi arvoiksi ja
       // syötetään uutena tietona HTML elementtien arvoiksi.
       function vaihdaTiedot(uudetTiedot){
        	var elementti = document.getElementById("tekstikenttä");
          elementti.innerHTML = uudetTiedot.kysymysTeksti;
          var elementti = document.getElementById("nappula1");

            elementti.style.display = "box";

              elementti.innerHTML = vastaus1teksti = uudetTiedot.vastausTeksti1;
              elementti.innerHTML = vastaus1teksti = uudetTiedot.vastausPäämäärä1;

          var elementti = document.getElementById("nappula2");

            elementti.style.display = "box";
              elementti.innerHTML = vastaus2teksti = uudetTiedot.vastausTeksti2;
              elementti.innerHTML = vastaus2eksti = uudetTiedot.vastausPäämäärä2;

          var elementti = document.getElementById("nappula2");

            elementti.style.display = "box";
              elementti.innerHTML = vastaus3teksti = uudetTiedot.vastausTeksti3;
              elementti.innerHTML = vastaus3teksti = uudetTiedot.vastausPäämäärä3;
      */
		}