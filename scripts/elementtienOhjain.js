class ElementtienOhjain{
    
    constructor(){
        var nappuloidenmaara = 1;
    }

    lisaaElementti(elementinID) {
        // lisaaElementti helpottaa toistuvien HTML elementtien luontia. 
        switch (elementinID) {
            case 'aloitaNappula':
            case 'nappula1':
            case 'nappula2':
            case 'nappula2':
            case 'nappula3':
            case 'nappula4':
            case 'seuraavakysymysnappula':
                // code block
                $('#nappulat').append(
                    $(document.createElement('button')).prop({
                        type: 'button',
                        id: elementinID,
                        
                        className: 'btn mr-lg-4 custom-btn'
                    }))
                break;

            default:
               
            // code block
        }

    }

    poistaElementti(elementinID) {
        // Suomenkielinen funktio joka hoitaa t‰ysin saman toiminnon kuin Element.remove(id) tarkoitettu helpottamaan koodin luettavuutta.
        document.getElementById(elementinID).remove();
    }


    lisaaEventHandler(nappulanID, valmiseventhandler) {
        // lisaaElementti helpottaa toistuvien EventHandlereident elementtien luontia. 
        switch (valmiseventhandler) {
            case 'nappulanapsautettu':
                document.getElementById(nappulanID).addEventListener('click', nappulaNapsautettu);
                break;
            default:
                break;
        }
    }


    vaihdaInnerHTML(id, uusiteksti) {
        // Suomenkielinen funktio joka hoitaa t‰ysin saman toiminnon kuin Element.innerHTML = uusiteksti tarkoitettu helpottamaan koodin luettavuutta.
        document.getElementById(id).innerHTML = uusiteksti;
    }

  
    vaihdaEnsimmaisenKysymyksenTietoihin(uudettiedot) {
        /* Vaihtaa tekstikent‰n sis‰isen HTML:‰n uusien tietojen toiseen arvoon, poistaa nappulan joka aloittaa quizzin ja luo oikean m‰‰r‰n nappuloita,
         * lis‰‰ EventHandlerit nappuloihin ja vaihtaa nappuloiden sis‰iset HTML: ‰t vastaus teksteihin.
         */
            this.vaihdaInnerHTML("tekstikentta", uudettiedot[1])
                this.poistaElementti("aloitaKyselyNappula");
                
            
            this.lisaaElementti("nappula1");
            this.lisaaElementti("nappula2");

            if (uudettiedot[4] == "") {
                console.log("kaksi nappulaa");
                this.nappuloidenmaara = 2;
                
            }
            else if (uudettiedot[5] == "") {
                this.lisaaElementti("nappula3");
                console.log("kolme nappulaa");
                this.nappuloidenmaara = 3;
            }
            else {
                this.lisaaElementti("nappula3");
                this.lisaaElementti("nappula4");
                console.log("nelja nappulaa");
                this.nappuloidenmaara = 4;
            }
           for (let i = 0; i < this.nappuloidenmaara;) {
                this.lisaaEventHandler("nappula" + (i + 1), 'nappulanapsautettu');
               console.log("nappula" + (i + 1));
                this.vaihdaInnerHTML("nappula" + (i + 1), uudettiedot[2 + i]);
               i++;
            }

    }

    vaihdaSeuraavanKysymyksenTietoihin(uudettiedot) {
    /* Vaihtaa tekstikent‰n sis‰isen HTML:‰n uusien tietojen toiseen arvoon, poistaa "seuraavakysymys" nappulan  ja luo oikean m‰‰r‰n nappuloita,
     * lis‰‰ EventHandlerit nappuloihin ja vaihtaa nappuloiden sis‰iset HTML: ‰t vastaus teksteihin.
     */
        this.vaihdaInnerHTML("tekstikentta", uudettiedot[1])

        

        this.poistaElementti("seuraavakysymysnappula");
        this.nappuloidenmaara = 0;

        this.lisaaElementti("nappula1");
        this.lisaaElementti("nappula2");
        this.nappuloidenmaara = 2;

        if (uudettiedot[4] == "") {
           
           

        }
        else if (uudettiedot[5] == "") {
            this.lisaaElementti("nappula3");
            console.log("kolme nappulaa");
            this.nappuloidenmaara = 3;
        }
        else {
            this.lisaaElementti("nappula3");
            this.lisaaElementti("nappula4");
            console.log("nelja nappulaa");
            this.nappuloidenmaara = 4;
        }
        for (let i = 0; i < this.nappuloidenmaara;) {
            this.lisaaEventHandler("nappula" + (i + 1), 'nappulanapsautettu');
            
            this.vaihdaInnerHTML("nappula" + (i + 1), uudettiedot[2 + i]);
            i++;
        }

    }

    vaihdaPalauteNakymaan(tiedot, valittuvastaus) {
    /*
     * Funktio ElementtienOhjain.vaihdaPalauteN‰kym‰‰n ottaa vastaan argumentit "tiedot" ja "valittuvastaus".
     * vaihdaPalauteN‰kym‰‰n poistaa nappulat, p‰ivitt‰‰ nappuloiden m‰‰r‰n, vertaa valittua vastausta ja oikeaa vastaustavastausta "tiedot" taulukon seitsem‰nteen arvoon,
     * vaihtaa elementin "tekstikentta" sis‰isen HTML:‰n "tiedot" argumentin kahdeksanteen tai yhdeks‰nteen elementtiin riippuen vastauksen vertailun lopputuloksesta
     * ja paluttaa totuusarvon true jos "valittuvastaus on oikea ja totuusarvon false jo se on v‰‰r‰.
     */
    
        for (let i = 0; i < this.nappuloidenmaara;) {
            this.poistaElementti("nappula" + (i + 1));
            i++;
        }
        this.nappuloidenmaara = 0;
        this.lisaaElementti("seuraavakysymysnappula");
        this.vaihdaInnerHTML("seuraavakysymysnappula", "Seuraava kysymys")
        this.lisaaEventHandler("seuraavakysymysnappula", "nappulanapsautettu");

        if (tiedot[6] == valittuvastaus) {
            this.vaihdaInnerHTML("tekstikentta", tiedot[7]);
            return true;
        }

        else {
            this.vaihdaInnerHTML("tekstikentta", tiedot[8]);
            return false;
        }
        this.vaihdaInnerHTML("seuraavakysymysnappula", "Seuraava kysymys")
    }

    vaihdaTulosNakymaan(pisteet) {

        this.poistaElementti("seuraavakysymysnappula");
        this.vaihdaInnerHTML("tekstikentta", "Sait" + " " + pisteet + " " + "pistett‰!");

    }
}