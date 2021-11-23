
const vastaukset = [];


class TiedonKasittelija {

    constructor() {
       

    }

    noudaVastausJSON() {
        return vastausJSON;
    }

    asetaVastausJSON(objekti) {
        this.vastausJSON = objekti;
    }



    noudaTiedot(valittavaKysymysID) {

            // PHP palvelimele l‰hetett‰v‰t tiedot.
            var arvot = {

                id: valittavaKysymysID

            };

            console.log(valittavaKysymysID);

            // Palauttaa lupauksen tapaisen objektin 
            return $.ajax({

                url: 'http://localhost/php/echo.php',
                type: 'post',
                //datatype: 'json',
                data: arvot,

                // "success" suoritetaan kuin lupaus ratkeaa onnistuneesti
                success: function (vastaus) {

                    // Vastaus tallennetaan myˆhemp‰‰ k‰sittely‰ varten.
                    vastaukset.push(vastaus);
                
                    console.log(vastaukset);

                },
                 // "error" suoritetaan kuin lupaus ratkeaa ep‰onnistuneesi, esimerkiksi johtuen palvelimen ruuhkautumisesta
                error: function () {
                    console.log('error');

            }

            });
        



    }
    kasitteleTiedot() {
        // Erottelee, k‰sittelee ja paluttaa tiedot.
        // "vastaukset" taulukon ensimm‰inen elementti tallennetaan "eritellyttiedot taulukkoon t‰m‰n j‰lkeen shift poistaa ensimm‰isen elementin taulukosta "vastaukset" ja vaihtaa j‰ljell‰ olevien vastausten indexit yhden pienemp‰‰n.
        var eritellyttiedot = vastaukset.shift();
        let kasitellyttiedot = [];
       

            // Split jakaa JSON merkkijonon taulukkoon erillisiksi merkkijonoiksi.
            var eritellyttiedot = eritellyttiedot.split('","');


            // Merkkijonoista poistetaan ylim‰‰r‰inen muotoilu jota ei haluta tallentaa.

            kasitellyttiedot.push(eritellyttiedot[0].replace('     {\"kysymysid\":\"', ""));

            kasitellyttiedot.push(eritellyttiedot[1].replace('kysymysteksti":"', ""));

            kasitellyttiedot.push(eritellyttiedot[2].replace('vastausvaihtoehto1\":\"', ""));

            kasitellyttiedot.push(eritellyttiedot[3].replace('vastausvaihtoehto2\":\"', ""));

            kasitellyttiedot.push(eritellyttiedot[4].replace('vastausvaihtoehto3\":\"', ""));

            kasitellyttiedot.push(eritellyttiedot[5].replace('vastausvaihtoehto4\":\"', ""));

            kasitellyttiedot.push(eritellyttiedot[6].replace('oikeavastaus\":\"', ""));

            kasitellyttiedot.push(eritellyttiedot[7].replace('oikeavastauspalaute":"', ""));
            kasitellyttiedot[7] = kasitellyttiedot[7].slice(0, -2);

            kasitellyttiedot.push(eritellyttiedot[8].replace('vaaravastauspalaute":"', ""));
            kasitellyttiedot[8] = kasitellyttiedot[8].slice(0, -2);
            
            return kasitellyttiedot;
    }
}
