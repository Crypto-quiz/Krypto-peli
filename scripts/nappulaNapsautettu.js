// Lisää case "seuraava kysymys" ja uudelleen kirjoita nappulat 1-4
const kysymystenmaara = 15; 
var seuraavakysymys = 1;
var oikeitavastauksia = 0;
var tiedonkasittelija = new TiedonKasittelija();
var elementtienohjaaja = new ElementtienOhjain();
var tiedot = [];

//  Nappuloihin liitetetyt instanssit EventHandler luokkasta odottavat tapahtumaa jossa nappulaa on painettu.
//  Kun nappulaa on painettu EventHandler kutsuu funktion "nappulaNapsautettu" ja syöttää Event tyyppisen olion argumenttina kutsutulle funktiolle nimellä "tapahtuma".
function nappulaNapsautettu(tapahtuma) {
    let valittuvastaus = 0;
    let onkovastausoikein;
    console.log("Napsautus havaittu");
    

        // Suoritettava koodi määrittyy "tapahtuma" Eventin atribuutin target.id mukaan. id sisältää Eventin luoneen elementin tunnisteen.
        switch (tapahtuma.target.id) {

                /*
                 * Neljällä vastaus nappulalle koodi tallentaa valitun vastauksen numeron ja kutsuu ElementtiOhjaimen funktion vaihdaPalauteNäkymään argumenteilla "tiedot" ja "valittuvastaus".
                 * vaihdaPalauteNäkymään poistaa HTML elemntit joiden id atribuuteilla jotka vastaavat vastaus nappuloita, päivittää nappuloiden määrän, vertaa valittua vastausta ja oikeaa vastaustavastausta "tiedot" taulukon seitsemänteen arvoon,
                 * vaihtaa elementin "tekstikentta" sisäisen HTML:än "tiedot" argumentin kahdeksanteen tai yhdeksänteen elementtiin riippuen vastauksen vertailun lopputuloksesta 
                 * ja paluttaa totuusarvon true jos "valittuvastaus on oikea ja totuusarvon false jo se on väärä. 
                 * PS. vaihdaPalauteNakymaan ei ole itseselitteinen nimi funktiolle.
                 */

                /*
                 * vaihdaPalute Funktion palauttama aro tallentuu muuttujaan "onkovastausoikein"
                 * Jos "onkovastausoikein" on tosi muuttuja "oikeitavastauksia" nousee yhdellä.
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
                    
                /* Jos seuraava kysymys on suurempi kuin kysymysten määrä vaihdaTulosnäkyaan kutsutaa syöttäen "oikeitavastauksia" muuttujan argumenttina.
                 * vaihdaTulosnäkymaan funktio poistaa elementin seuraavakysymysnappula ja vaihtaa HTML elementin "tekstikentta" sisäisenHTML:än onnittelu tekstiin joka näyttää lopulliset pisteet.
                 */
                if (seuraavakysymys > kysymystenmaara) {
                    elementtienohjaaja.vaihdaTulosNakymaan(oikeitavastauksia)
                }
                /* Muussa tapauksessa muuttujaan "tiedot" tallennetaan kasitteleTiedot funktion palauttamat käsitellyt tiedot.
                 * "tiedot" muuttuja syötetään argumenttina vaihdaSeuraavanKysymyksenTietoihin funktioon, joka vaihtaa tekstikentän sisäisen HTML:än kysymystekstiin, poistaa ja luo oikean määrän nappuloita,
                 * lisää EventHandlerit nappuloihin ja vaihtaa nappuloiden sisäiset HTML:ät vastaus teksteihin.
                 * noudaTiedot funktio kutsutaan argumentillä jonka arvo on seurravan kysymyksen ID + 3 välttäeksi toistoa joka johtuu quizin alussa puskuroiduista kolmesta kysymyksestä.
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
    // Kolme kysymystä puskuroidaan
    tiedonkasittelija.noudaTiedot(1);
    tiedonkasittelija.noudaTiedot(2);
    tiedonkasittelija.noudaTiedot(3);
        
   
    /* Epäsynkronoitu lupaus joka ratkeaa 2500ms päästä kutsusta.
     * muuttujaan "tiedot" tallennetaan kasitteleTiedot funktion palauttamat käsitellyt tiedot.
     * "tiedot" muuttuja syötetään argumenttina vaihdaSeuraavanKysymyksenTietoihin funktioon, joka vaihtaa tekstikentän sisäisen HTML:än kysymystekstiin, poistaa nappulan joka aloittaa quizzin ja luo oikean määrän nappuloita,
     * lisää EventHandlerit nappuloihin ja vaihtaa nappuloiden sisäiset HTML:ät vastaus teksteihin.
     * noudaTiedot funktio kutsutaan argumentillä jonka arvo on seurravan kysymyksen ID + 3 välttäeksi toistoa joka johtuu quizin alussa puskuroiduista kolmesta kysymyksestä.
     */
    setTimeout(() => {
        tiedot = tiedonkasittelija.kasitteleTiedot();
        elementtienohjaaja.vaihdaEnsimmaisenKysymyksenTietoihin(tiedot);
        tiedonkasittelija.noudaTiedot(seuraavakysymys + 3);
        seuraavakysymys++;
    }, 100);
   
    

   
   
}