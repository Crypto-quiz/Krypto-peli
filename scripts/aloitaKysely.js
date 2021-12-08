//
var tiedonkasittelija = new TiedonKasittelija();
const globaalitMuuttujat = {
    "vanhatElementit": [],
    "tamanhetkinensivu": 0

}

function aloitaKysely() {

    
    globaalitMuuttujat.vanhatElementit.push("aloitaNappula");

    // Anna ID:t tekstikentälle ja otsikolle piilotusta varten.
    //piilotaElementti("tekstikentta");
    //piilotaElementti("otsikko");

    console.log(tiedonkasittelija);

    tiedonkasittelija.noudaJSON();
    tiedonkasittelija.luoSivut();

    sivu = tiedonkasittelija.getSivu(0);
    globaalitMuuttujat.tamanhetkinensivu = sivu;
    poistaVanhatElementit();


    console.log(sivu);
    console.log("sivut");

    vaihdaSivuunTiedot(sivu);

    /*
    poistaLuokka("vastaus1", "button")
    lisaaLuokka("vastaus1", "flexbox");
    */
    

    
}