class Valinta {
    tyyppi;
    teksti;
    seuraavasivu;

    // id, kysymysteksti, tarkennettukysymys, vastaukset, kuva
    constructor(valinnantyyppi, valinnanteksti, valinnanseuraavasivu) {
        this.tyyppi = valinnantyyppi;
        this.teksti = valinnanteksti;
        this.seuraavasivu = valinnanseuraavasivu;
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