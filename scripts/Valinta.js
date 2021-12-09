class Valinta {
    tyyppi;
    teksti;
    seuraavasivu;
    oikeatvastaukset;

    // id, kysymysteksti, tarkennettukysymys, vastaukset, kuva
    constructor(valinnantyyppi, valinnanteksti, valinnanseuraavasivu, onkovastausoikea) {
        this.tyyppi = valinnantyyppi;
        this.teksti = valinnanteksti;
        this.seuraavasivu = valinnanseuraavasivu;
        this.oikeatvastaukset = onkovastausoikea;
    }

    getTyyppi() {
        return this.tyyppi;
    }

    getTeksti() {
        return this.teksti;
    }

    getSeuraavaSivu() {
        return this.seuraavasivu;
    }
}