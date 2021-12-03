//
var tiedonkasittelija = new TiedonKasittelija();
const globaalitMuuttujat = {
    "vanhatValinnat": [],
    "tamanhetkinensivu": 0

}

function aloitaKysely() {

    
    globaalitMuuttujat.vanhatValinnat.push("aloitaKyselyNappula");

    
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