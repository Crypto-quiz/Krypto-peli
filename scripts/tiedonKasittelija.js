
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

            // PHP palvelimele lähetettävät tiedot.
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

                    // Vastaus tallennetaan myöhempää käsittelyä varten.
                    vastaukset.push(vastaus);
                
                    console.log(vastaukset);

                },
                 // "error" suoritetaan kuin lupaus ratkeaa epäonnistuneesi, esimerkiksi johtuen palvelimen ruuhkautumisesta
                error: function () {
                    console.log('error');

            }

            });
        



    }
    kasitteleTiedot() {
        // Erottelee, käsittelee ja paluttaa tiedot.
        // "vastaukset" taulukon ensimmäinen elementti tallennetaan "eritellyttiedot taulukkoon tämän jälkeen shift poistaa ensimmäisen elementin taulukosta "vastaukset" ja vaihtaa jäljellä olevien vastausten indexit yhden pienempään.
        var eritellyttiedot = vastaukset.shift();
        let kasitellyttiedot = [];
       

            // Split jakaa JSON merkkijonon taulukkoon erillisiksi merkkijonoiksi.
            var eritellyttiedot = eritellyttiedot.split('","');


            // Merkkijonoista poistetaan ylimääräinen muotoilu jota ei haluta tallentaa.

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
