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
                poistaVanhatElementit();
                // selvenn�
                console.log(globaalitMuuttujat.tamanhetkinensivu.sivunvalinnat[vastauksenNumero -1]);
                seuraavasivu = tiedonkasittelija.getSivu(globaalitMuuttujat.tamanhetkinensivu.sivunvalinnat[vastauksenNumero -1].seuraavasivu);
                console.log(seuraavasivu);
                vaihdaSivuunTiedot(seuraavasivu);

                //Jos sivulla on yksi tai useampi oikea vastaus iteroidaan oikeiden vastausten läpi tarkistus onko valittu vastaus oikea.

                //Jos valittu vastaus on oikea Ohjelma brake:aa ulos casesta muutettuaan luokka luokkaan borderi-oikein ja vaihdettua seuraavaan sivuun. 
                //Asynkroninen lupaus ratkeaa 1, 5 sekunnin päästä palauttaen luokan takaisin normaaliksi.

                //Jos valittua vastausta ei ole oikeissa vastauksissa Ohjelma brake:aa ulos casesta muutettuaan luokka luokkaan borderi-vaarin ja vaihdettua seuraavaan sivuun. 
                //Asynkroninen lupaus ratkeaa 1, 5 sekunnin päästä palauttaen luokan takaisin normaaliksi

                //Jos sivulla ei ole oikeaa vastausta luokkaa ei muuteta ja tiedot vaihdetaan seuraavan sivun tietoihin.
                console.log("Pituus: " + globaalitMuuttujat.tamanhetkinensivu.sivunoikeatvastaukset.length);
                
                    if (globaalitMuuttujat.tamanhetkinensivu.sivunoikeatvastaukset.length > 0) {
                        for (let i = 0; globaalitMuuttujat.tamanhetkinensivu.sivunoikeatvastaukset.length > i; i++) {
                            if (globaalitMuuttujat.tamanhetkinensivu.sivunoikeatvastaukset[i] == vastauksenNumero) {
                                poistaLuokka("borderi", "borderi");
                                lisaaLuokka("borderi", "borderi-oikein");
                                setTimeout(() => {
                                    poistaLuokka("borderi", "borderi-oikein");
                                    lisaaLuokka("borderi", "borderi");
                                }, 1500);
                                console.log("oikein");
                                console.log(globaalitMuuttujat.tamanhetkinensivu.sivunoikeatvastaukset);
                                globaalitMuuttujat.tamanhetkinensivu = seuraavasivu;
                                break;
                            }
                        } 
                        poistaLuokka("borderi", "borderi");
                        lisaaLuokka("borderi", "borderi-vaarin");
                        setTimeout(() => {
                            poistaLuokka("borderi", "borderi-vaarin");
                            lisaaLuokka("borderi", "borderi");
                        }, 1500);
                        console.log("vaarin");
                        console.log(globaalitMuuttujat.tamanhetkinensivu.sivunoikeatvastaukset);
                        globaalitMuuttujat.tamanhetkinensivu = seuraavasivu;
                        break;
                    }
                    else {
                        console.log("Seuraava sivu!");
                        console.log(globaalitMuuttujat.tamanhetkinensivu.sivunoikeatvastaukset);
                        globaalitMuuttujat.tamanhetkinensivu = seuraavasivu;
                        break;

                    }
                
                

            case "seuraava":


                vastauksenNumero = 0;
                console.log("seuraava");

                poistaVanhatElementit();
                // selvenn�
                console.log(globaalitMuuttujat.tamanhetkinensivu.sivunvalinnat[vastauksenNumero]);
                seuraavasivu = tiedonkasittelija.getSivu(globaalitMuuttujat.tamanhetkinensivu.sivunvalinnat[vastauksenNumero].seuraavasivu);

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