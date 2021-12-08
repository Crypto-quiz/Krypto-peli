class Valinta {
    tyyppi;
    teksti;
    seuraavasivu;
    oikeavastaus;

    // id, kysymysteksti, tarkennettukysymys, vastaukset, kuva
    constructor(valinnantyyppi, valinnanteksti, valinnanseuraavasivu, onkovastausoikea) {
        this.tyyppi = valinnantyyppi;
        this.teksti = valinnanteksti;
        this.seuraavasivu = valinnanseuraavasivu;
        this.oikeavastaus = onkovastausoikea;
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