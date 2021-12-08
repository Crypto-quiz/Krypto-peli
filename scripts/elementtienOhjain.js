    function lisaaElementti(elementinID, elementinteksti) {
        let elementti;
        // lisaaElementti helpottaa toistuvien HTML elementtien luontia. 
        switch (elementinID) {
            case 'aloitaNappula':
            case 'vastaus1':
            case 'vastaus2':
            case 'vastaus3':
            case 'vastaus4':
            case 'vastaus5':
            case 'seuraava':
            //case 'palaaviimeisimpaan':
           
            case 'seuraavakysymysnappula':
                // code block
                $('#nappulat').append(
                    $(document.createElement('button')).prop({
                        type: "button",
                        id: elementinID,
                        innerHTML: elementinteksti,
                        // Anna kuvaavat nimet
                        className: "button"
                    }))
                break;

            case 'tarina':
            case 'palaute':
            case 'kysymys':

                $('#tekstit').append(
                    $(document.createElement('p')).prop({
                        type: elementinID,
                        id: elementinID,
                        innerHTML: elementinteksti,
                        // Anna kuvaavat nimet
                        className: elementinID
                    }))
                break;

            default:
               
            // code block
        }

    }
    function vaihdaInnerHTML(id, uusiteksti) {
        // Suomenkielinen funktio joka hoitaa t�ysin saman toiminnon kuin Element.innerHTML = uusiteksti tarkoitettu helpottamaan koodin luettavuutta.
        document.getElementById(id).innerHTML = uusiteksti;
    }

    function tyhjennaInnerHTML(id) {
        // Suomenkielinen funktio joka hoitaa t�ysin saman toiminnon kuin Element.innerHTML = "" tarkoitettu helpottamaan koodin luettavuutta.
        document.getElementById(id).innerHTML = "";
}

    function poistaElementti(elementinID) {
        // Suomenkielinen funktio joka hoitaa t�ysin saman toiminnon kuin Element.remove(id) tarkoitettu helpottamaan koodin luettavuutta.
        document.getElementById(elementinID).remove();
    }


    function lisaaEventHandler(nappulanID, valmiseventhandler) {
        // lisaaElementti helpottaa toistuvien EventHandlereident elementtien luontia. 
        switch (valmiseventhandler) {
            case 'napsautusKuuntelija':
                document.getElementById(nappulanID).addEventListener('click', napsautusKuuntelija);
                break;
            default:
                break;
        }
    }


    function vaihdaSivuunTiedot(sivu) {
      
        for (let i = 0; sivu.laskeTekstienMaara() > i; i++) {
           //
            lisaaElementti(sivu.sivuntekstit[i].tyyppi, sivu.sivuntekstit[i].sisalto);
            globaalitMuuttujat.vanhatElementit.push(sivu.sivuntekstit[i].tyyppi);

            console.log(sivu.sivuntekstit[i].tyyppi, sivu.sivuntekstit[i].sisalto);
        }

        for (let i = 0; sivu.laskeValintojenMaara() > i; i++) {

            let tyyppi = sivu.sivunvalinnat[i].tyyppi;
            let teksti = sivu.sivunvalinnat[i].teksti;
           
           
            
            lisaaElementti(tyyppi, teksti);
            
            vaihdaKuva(sivu.sivunid);

            lisaaEventHandler(tyyppi, 'napsautusKuuntelija');

            globaalitMuuttujat.vanhatElementit.push(tyyppi);

            
        }

    }

    
    function poistaVanhatElementit() {
        for (let i = 0; globaalitMuuttujat.vanhatElementit.length > i; i++) {
            poistaElementti(globaalitMuuttujat.vanhatElementit[i]);
        }
        globaalitMuuttujat.vanhatElementit = [];
}

function tyhjennaTekstit() {
    tyhjennaInnerHTML("tarina");
    tyhjennaInnerHTML("kysymys");
    tyhjennaInnerHTML("palaute");
}

function piilotaElementti(id) {
    document.getElementById(id).style.display = "none";
}

function paljastaElementti(id) {
    document.getElementById(id).style.display = "block";
    console.log("show")
}

function poistaLuokka(id, uusiluokka) {
    id = "#" + id;
    $(id).removeClass(uusiluokka);
}

function lisaaLuokka(id, uusiluokka) {
    document.getElementById(id).classList.add(uusiluokka);  
}

function vaihdaKuva(seuraavansivunindexi) {
    document.getElementById("kuva").src = "images/" + seuraavansivunindexi + ".svg";
    console.log("images/" + seuraavansivunindexi + ".svg");
}
    
