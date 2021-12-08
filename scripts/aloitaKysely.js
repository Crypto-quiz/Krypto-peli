//
var tiedonkasittelija = new TiedonKasittelija();
const globaalitMuuttujat = {
    "vanhatValinnat": [],
    "tamanhetkinensivu": 0

}

function aloitaKysely() {

    tyhjennaInnerHTML('content');
    globaalitMuuttujat.vanhatValinnat.push("aloitaNappula");

    // Anna ID:t tekstikent�lle ja otsikolle piilotusta varten.
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
    vaihdaSivuunTiedot(sivu);
    
}