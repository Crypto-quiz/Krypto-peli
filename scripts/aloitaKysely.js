// Globaali const vailla parempaa paikkaa 
var tiedonkasittelija = new TiedonKasittelija();

function aloitaKysely() {

    vanhatValinnat = [];
    vanhatValinnat.push("aloitaKyselyNappula");

    tiedonkasittelija.noudaJSON();
    tiedonkasittelija.luoSivut();

    poistaValinnat(vanhatValinnat);
    vaihdaSivuunTiedot(tiedonkasittelija.getSivu(0));
    
}