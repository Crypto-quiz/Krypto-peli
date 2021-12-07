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
                        type: 'button',
                        id: elementinID,
                        innerHTML: elementinteksti,
                        // Anna kuvaavat nimet
                        className: 'button'
                    }))
                break;

            case 'tarina':
                elementti = document.getElementById('tarina');
                elementti.innerHTML = elementinteksti;
                break;
            case 'palaute':
                elementti = document.getElementById('palaute');
                elementti.innerHTML = elementinteksti;
                break;

            case 'kysymys':
                elementti = document.getElementById('kysymys');
                elementti.innerHTML = elementinteksti;
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
            console.log(sivu.sivuntekstit[i].tyyppi, sivu.sivuntekstit[i].sisalto);
        }

        for (let i = 0; sivu.laskeValintojenMaara() > i; i++) {

            let tyyppi = sivu.sivunvalinnat[i].tyyppi;
            let teksti = sivu.sivunvalinnat[i].teksti;
           
           
            
            lisaaElementti(tyyppi, teksti);
            vaihdaInnerHTML(tyyppi, teksti);
            lisaaEventHandler(tyyppi, 'napsautusKuuntelija');

            globaalitMuuttujat.vanhatValinnat.push(tyyppi);

            
        }

    }

    
    function poistaValinnat() {
        for (let i = 0; globaalitMuuttujat.vanhatValinnat.length > i; i++) {
            poistaElementti(globaalitMuuttujat.vanhatValinnat[i]);
        }
        globaalitMuuttujat.vanhatValinnat = [];
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
    
