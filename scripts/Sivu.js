class Sivu {
    oikeatvastaukset;
    sivunid; // 
    sivuntyyppi;
    sivuntekstit = [];
    sivunvalinnat = [];
    sivunkuva;
        // id, kysymysteksti, tarkennettukysymys, vastaukset, kuva
    constructor(id, tyyppi, tekstit, valinnat, kuva, oikeavastaukset) {
        this.sivunid = id;
        this.sivuntyyppi = tyyppi; 
        this.sivunoikeatvastaukset = oikeavastaukset;
        for (let i = 0; tekstit.length > i; i++) {
            this.sivuntekstit.push(new Teksti(tekstit[i].tekstintyyppi, tekstit[i].teksti));
        }

        for (let i = 0; valinnat.length > i; i++) {
            this.sivunvalinnat.push(new Valinta(valinnat[i].valinnantyyppi, valinnat[i].valinnanteksti, valinnat[i].seuraavasivu));
        }

        this.sivunkuva = kuva;
    }

    getSivunid() {
        return this.sivunid;
    }

    getSivunTyyppi() {
        return this.sivuntyyppi;
    }

    laskeTekstienMaara() {
       
        return this.sivuntekstit.length;
        
    }

    getTeksti(indexi) {
        return this.sivuntekstit[indexi];
    }

    getValinta(indexi) {
        return this.sivunvalinta[indexi];
    }

    laskeValintojenMaara() {
        
        return this.sivunvalinnat.length;
    }

    getValinta(indexi) {
        return this.sivuntekstit[indexi];

    }
}