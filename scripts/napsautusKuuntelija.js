//  Nappuloihin liitetetyt instanssit EventHandler luokkasta odottavat tapahtumaa jossa nappulaa on painettu.
//  Kun nappulaa on painettu EventHandler kutsuu funktion "nappulaNapsautettu" ja sy�tt�� Event tyyppisen olion argumenttina kutsutulle funktiolle nimell� "tapahtuma".

function napsautusKuuntelija(tapahtuma) {

    let napsautetunnappulanID = tapahtuma.target.id;
    let vastauksenNumero;
    let seuraavasivu;
    // seuraavan sivun indexi 

    console.log("Napsautus havaittu");
    

        // Suoritettava koodi m��rittyy "tapahtuma" Eventin atribuutin target.id mukaan. id sis�lt�� Eventin luoneen elementin tunnisteen.
        switch (napsautetunnappulanID) {

           

            case "vastaus1":
            case "vastaus2": 
            case "vastaus3":
            case "vastaus4":

                vastauksenNumero = napsautetunnappulanID.substr(napsautetunnappulanID.length - 1);
                console.log("vastaus " + vastauksenNumero);
                poistaValinnat();
                tyhjennaTekstit();
                // selvenn�
                console.log(globaalitMuuttujat.tamanhetkinensivu.sivunvalinnat[vastauksenNumero -1]);
                seuraavasivu = tiedonkasittelija.getSivu(globaalitMuuttujat.tamanhetkinensivu.sivunvalinnat[vastauksenNumero -1].seuraavasivu);
                console.log(seuraavasivu);

                
                vaihdaSivuunTiedot(seuraavasivu);
                globaalitMuuttujat.tamanhetkinensivu = seuraavasivu;
                break;

            case "seuraava":


                vastauksenNumero = 0;
                console.log("seuraava");
                poistaValinnat();
                tyhjennaTekstit();
                // selvenn�
                console.log(globaalitMuuttujat.tamanhetkinensivu.sivunvalinnat[vastauksenNumero]);
                seuraavasivu = tiedonkasittelija.getSivu(globaalitMuuttujat.tamanhetkinensivu.sivunvalinnat[vastauksenNumero].seuraavasivu);
                console.log(seuraavasivu);


                vaihdaSivuunTiedot(seuraavasivu);
                globaalitMuuttujat.tamanhetkinensivu = seuraavasivu;
                break;
            case "palaatakaisin":
                console.log("takaisin");
                elementtienohjaaja.poistaVanhanSivunValinnat();
                seuraavasivu = tiedonkasittelija.getSivu(seuraavasivu).sivunvalinnat[0].seuraavasivu;
                elementtienohjaaja.vaihdaSivuunTiedot(tiedonkasittelija.getSivu(seuraavasivu));
                console.log(seuraavasivu);
                // 
                break;

        }         
}