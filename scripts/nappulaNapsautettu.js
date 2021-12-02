//  Nappuloihin liitetetyt instanssit EventHandler luokkasta odottavat tapahtumaa jossa nappulaa on painettu.
//  Kun nappulaa on painettu EventHandler kutsuu funktion "nappulaNapsautettu" ja syˆtt‰‰ Event tyyppisen olion argumenttina kutsutulle funktiolle nimell‰ "tapahtuma".

function napsautusKuuntelija(tapahtuma) {
    let napsautetunnappulanID = tapahtuma.target.id;

    // seuraavan sivun indexi 

    console.log("Napsautus havaittu");
    

        // Suoritettava koodi m‰‰rittyy "tapahtuma" Eventin atribuutin target.id mukaan. id sis‰lt‰‰ Eventin luoneen elementin tunnisteen.
        switch (tapahtuma) {

            

            case "vastaus1":
            case "vastaus2": 
            case "vastaus3":
            case "vastaus4":

                console.log("vastaus 1");
                elementtienohjaaja.poistaSivunValinnat();
                // selvenn‰
                seuraavasivu = tiedonkasittelija.getSivu(seuraavasivu).sivunvalinnat[0].seuraavasivu;
                // K‰yt‰ funktiota luokansijasta
                elementtienohjaaja.vaihdaSivuunTiedot(tiedonkasittelija.getSivu(seuraavasivu));
                console.log(seuraavasivu);
                // 
                break;

            case "seuraava":
                console.log("seuraava");
                elementtienohjaaja.poistaVanhanSivunValinnat();
                seuraavasivu = tiedonkasittelija.getSivu(seuraavasivu).sivunvalinnat[0].seuraavasivu;
                elementtienohjaaja.vaihdaSivuunTiedot(tiedonkasittelija.getSivu(seuraavasivu));
                console.log(seuraavasivu);
                // 
                break;
            case "palaatakaisin":
                console.log("takaisin");
                elementtienohjaaja.poistaVanhanSivunValinnat();
                euraavasivu = tiedonkasittelija.getSivu(seuraavasivu).sivunvalinnat[0].seuraavasivu;
                elementtienohjaaja.vaihdaSivuunTiedot(tiedonkasittelija.getSivu(seuraavasivu));
                console.log(seuraavasivu);
                // 
                break;

        }         
}