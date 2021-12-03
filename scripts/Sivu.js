class Sivu {
    sivunid; // 
    sivuntyyppi;
    sivuntekstit = [];
    sivunvalinnat = [];
    sivunkuva;
        // id, kysymysteksti, tarkennettukysymys, vastaukset, kuva
    constructor(id, tyyppi, tekstit, valinnat, kuva) {
        this.sivunid = id;
        this.sivuntyyppi = tyyppi; 

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
        return Object.keys(this.tekstit).length;
    }

    getTeksti(indexi) {
        return this.sivuntekstit[indexi];
    }

    getValinta(indexi) {
        return this.sivunvalinta[indexi];
    }

    laskevValintojenMaara() {
        return Object.keys(this.sivuntekstit).length;
    }

    valintojenMaara() {
        return Object.keys(this.sivunvalinnat).length;
    }

    getValinnat(indexi) {
        return this.sivuntekstit[indexi];

    }
}