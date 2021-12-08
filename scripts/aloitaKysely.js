//
var tiedonkasittelija = new TiedonKasittelija();
const globaalitMuuttujat = {
    "vanhatValinnat": [],
    "tamanhetkinensivu": 0

}

function aloitaKysely() {

    
    globaalitMuuttujat.vanhatValinnat.push("aloitaNappula");

    // Anna ID:t tekstikentälle ja otsikolle piilotusta varten.
    //piilotaElementti("tekstikentta");
    //piilotaElementti("otsikko");

    console.log(tiedonkasittelija);

    tiedonkasittelija.noudaJSON();
    tiedonkasittelija.luoSivut();

    sivu = tiedonkasittelija.getSivu(0);
    globaalitMuuttujat.tamanhetkinensivu = sivu;
    poistaValinnat();


    console.log(sivu);
    console.log("sivut");
    piilotaElementti("ohjeet");
    piilotaElementti("tekstikentta");
    vaihdaSivuunTiedot(sivu);

    // Uudet testissä
    poistaLuokka("vastaus1", "button")
    lisaaLuokka("vastaus1", "flexbox");
    vaihdaKuva("images/swag.svg")

    
}