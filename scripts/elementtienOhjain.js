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
                        className: 'btn mr-lg-4 custom-btn'
                    }))
                break;

            case 'tarina':
            case 'palaute':
                elementti = document.getElementById('tekstikentta');
                elementti.innerHTML = elementinteksti;
                break;

            case 'kysymyksenselvennys':
                elementti = document.getElementById('kysymyksenselvennys');
                elementti.innerHTML = elementinteksti;
                break;

            default:
               
            // code block
        }

    }
    function vaihdaInnerHTML(id, uusiteksti) {
        // Suomenkielinen funktio joka hoitaa täysin saman toiminnon kuin Element.innerHTML = uusiteksti tarkoitettu helpottamaan koodin luettavuutta.
        document.getElementById(id).innerHTML = uusiteksti;
    }

    function poistaElementti(elementinID) {
        // Suomenkielinen funktio joka hoitaa täysin saman toiminnon kuin Element.remove(id) tarkoitettu helpottamaan koodin luettavuutta.
        document.getElementById(elementinID).remove();
    }


    function lisaaEventHandler(nappulanID, valmiseventhandler) {
        // lisaaElementti helpottaa toistuvien EventHandlereident elementtien luontia. 
        switch (valmiseventhandler) {
            case 'nappulanapsautettu':
                document.getElementById(nappulanID).addEventListener('click', nappulaNapsautettu);
                break;
            default:
                break;
        }
    }


    function vaihdaSivuunTiedot(sivu) {

        for (let i = 0; sivu.sivuntekstit.length > i; i++) {
            lisaaElementti(sivu.sivuntekstit[i].tekstintyyppi, sivu.sivuntekstit[i].teksti);
        }

        for (let i = 0; sivu.sivunvalinnat.length > i; i++) {
            let tyyppi = sivu.sivunvalinnat[i].valinnantyyppi;
            let teksti = sivu.sivunvalinnat[i].valinnanteksti;

           
            
            lisaaElementti(tyyppi, teksti);
            vaihdaInnerHTML(tyyppi, teksti);
            lisaaEventHandler(tyyppi, 'nappulanapsautettu');

            //this.sivunaktiivisetvalinnat.push(tyyppi);
        }

    }

    
    function poistaValinnat(listavanhoistavalinnoista) {
        for (let i = 0; listavanhoistavalinnoista.length > i; i++) {
            this.poistaElementti(listavanhoistavalinnoista[i]);
        }
        
    }
    
