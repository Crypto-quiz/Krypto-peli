// Lis�� case "seuraava kysymys" ja uudelleen kirjoita nappulat 1-4
const kysymystenmaara = 15; 
var seuraavakysymys = 1;
var oikeitavastauksia = 0;
var tiedonkasittelija = new TiedonKasittelija();
var elementtienohjaaja = new ElementtienOhjain();
var tiedot = [];

//  Nappuloihin liitetetyt instanssit EventHandler luokkasta odottavat tapahtumaa jossa nappulaa on painettu.
//  Kun nappulaa on painettu EventHandler kutsuu funktion "nappulaNapsautettu" ja sy�tt�� Event tyyppisen olion argumenttina kutsutulle funktiolle nimell� "tapahtuma".
function nappulaNapsautettu(tapahtuma) {
    let valittuvastaus = 0;
    let onkovastausoikein;
    console.log("Napsautus havaittu");
    

        // Suoritettava koodi m��rittyy "tapahtuma" Eventin atribuutin target.id mukaan. id sis�lt�� Eventin luoneen elementin tunnisteen.
        switch (tapahtuma.target.id) {

                /*
                 * Nelj�ll� vastaus nappulalle koodi tallentaa valitun vastauksen numeron ja kutsuu ElementtiOhjaimen funktion vaihdaPalauteN�kym��n argumenteilla "tiedot" ja "valittuvastaus".
                 * vaihdaPalauteN�kym��n poistaa HTML elemntit joiden id atribuuteilla jotka vastaavat vastaus nappuloita, p�ivitt�� nappuloiden m��r�n, vertaa valittua vastausta ja oikeaa vastaustavastausta "tiedot" taulukon seitsem�nteen arvoon,
                 * vaihtaa elementin "tekstikentta" sis�isen HTML:�n "tiedot" argumentin kahdeksanteen tai yhdeks�nteen elementtiin riippuen vastauksen vertailun lopputuloksesta 
                 * ja paluttaa totuusarvon true jos "valittuvastaus on oikea ja totuusarvon false jo se on v��r�. 
                 * PS. vaihdaPalauteNakymaan ei ole itseselitteinen nimi funktiolle.
                 */

                /*
                 * vaihdaPalute Funktion palauttama aro tallentuu muuttujaan "onkovastausoikein"
                 * Jos "onkovastausoikein" on tosi muuttuja "oikeitavastauksia" nousee yhdell�.
                 */
                case "nappula1":
                    console.log("nappula1");
                valittuvastaus = 1;

                onkovastausoikein = elementtienohjaaja.vaihdaPalauteNakymaan(tiedot, valittuvastaus);
                if (onkovastausoikein == true) {
                    oikeitavastauksia++;
                }

                    // 
                    break;

                case "nappula2":
                    console.log("nappula2");
                    valittuvastaus = 2;
                onkovastausoikein = elementtienohjaaja.vaihdaPalauteNakymaan(tiedot, valittuvastaus);
                if (onkovastausoikein == true) {
                        oikeitavastauksia++;
                    }
                    break;

                case "nappula3":
                    console.log("nappula3");
                    valittuvastaus = 3;
                onkovastausoikein = elementtienohjaaja.vaihdaPalauteNakymaan(tiedot, valittuvastaus);
                if (onkovastausoikein == true) {
                        oikeitavastauksia++;
                    }
                    break;

                case "nappula4":
                    console.log("nappula4");
                    valittuvastaus = 4;
                onkovastausoikein = elementtienohjaaja.vaihdaPalauteNakymaan(tiedot, valittuvastaus);
                if (onkovastausoikein == true) {
                        oikeitavastauksia++;
                    }
                    break;

                
                case "seuraavakysymysnappula":
                    
                /* Jos seuraava kysymys on suurempi kuin kysymysten m��r� vaihdaTulosn�kyaan kutsutaa sy�tt�en "oikeitavastauksia" muuttujan argumenttina.
                 * vaihdaTulosn�kymaan funktio poistaa elementin seuraavakysymysnappula ja vaihtaa HTML elementin "tekstikentta" sis�isenHTML:�n onnittelu tekstiin joka n�ytt�� lopulliset pisteet.
                 */
                if (seuraavakysymys > kysymystenmaara) {
                    elementtienohjaaja.vaihdaTulosNakymaan(oikeitavastauksia)
                }
                /* Muussa tapauksessa muuttujaan "tiedot" tallennetaan kasitteleTiedot funktion palauttamat k�sitellyt tiedot.
                 * "tiedot" muuttuja sy�tet��n argumenttina vaihdaSeuraavanKysymyksenTietoihin funktioon, joka vaihtaa tekstikent�n sis�isen HTML:�n kysymystekstiin, poistaa ja luo oikean m��r�n nappuloita,
                 * lis�� EventHandlerit nappuloihin ja vaihtaa nappuloiden sis�iset HTML:�t vastaus teksteihin.
                 * noudaTiedot funktio kutsutaan argumentill� jonka arvo on seurravan kysymyksen ID + 3 v�ltt�eksi toistoa joka johtuu quizin alussa puskuroiduista kolmesta kysymyksest�.
                 * 
                 */
                else {
                    tiedot = tiedonkasittelija.kasitteleTiedot();
                    elementtienohjaaja.vaihdaSeuraavanKysymyksenTietoihin(tiedot);
                    tiedonkasittelija.noudaTiedot(seuraavakysymys + 3);
                    seuraavakysymys++;
                }
                    
                    break;
            
                default:
                    valittuvastaus = 0;
                // code block
            }
}
       


function aloitaKysely() {
    // Kolme kysymyst� puskuroidaan
    tiedonkasittelija.noudaTiedot(1);
    tiedonkasittelija.noudaTiedot(2);
    tiedonkasittelija.noudaTiedot(3);
        
   
    /* Ep�synkronoitu lupaus joka ratkeaa 2500ms p��st� kutsusta.
     * muuttujaan "tiedot" tallennetaan kasitteleTiedot funktion palauttamat k�sitellyt tiedot.
     * "tiedot" muuttuja sy�tet��n argumenttina vaihdaSeuraavanKysymyksenTietoihin funktioon, joka vaihtaa tekstikent�n sis�isen HTML:�n kysymystekstiin, poistaa nappulan joka aloittaa quizzin ja luo oikean m��r�n nappuloita,
     * lis�� EventHandlerit nappuloihin ja vaihtaa nappuloiden sis�iset HTML:�t vastaus teksteihin.
     * noudaTiedot funktio kutsutaan argumentill� jonka arvo on seurravan kysymyksen ID + 3 v�ltt�eksi toistoa joka johtuu quizin alussa puskuroiduista kolmesta kysymyksest�.
     */
    setTimeout(() => {
        tiedot = tiedonkasittelija.kasitteleTiedot();
        elementtienohjaaja.vaihdaEnsimmaisenKysymyksenTietoihin(tiedot);
        tiedonkasittelija.noudaTiedot(seuraavakysymys + 3);
        seuraavakysymys++;
    }, 100);
   
    

   
   
}