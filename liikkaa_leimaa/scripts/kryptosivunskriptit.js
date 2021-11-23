
    // Nimeä uusi napsautus tapahtuma
    function napsautusTapahtuma1() {
        $.ajax({

            url : 'http://localhost/php/echo.php',
            type : 'POST',
            // data : "arvo"   käytettävä kun haluat lähettää tietoa PHP:lle
     success : function (vastausJSON) {

                var vastaus = vastausJSON;
                // document.write(vastausJSON); hyödyllinen testaus funktio
                console.log (vastausJSON);
     },
     error : function () {
        console.log ('error');
     }
    vaihdaTiedot(vastaus);
        });
    vaihdaTiedot(results);
    // jos on enemmän kuin yksi muuttuja täytyy täsmentää esim uudetTiedot.kysymysTeksti
    }
    
    function vaihdaTiedot(uudetTiedot){
        var elementti = document.getElementById("tekstikenttä");
        elementti.innerHTML = JSON.stringify(uudetTiedot);
    }