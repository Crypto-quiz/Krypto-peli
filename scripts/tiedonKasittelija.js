
class TiedonKasittelija {
    sivuteriteltyina = [];
    sivutJSON;
    constructor() {
        
    }

    
    noudaJSON () {
        this.sivutJSON = JSON.parse(
            '{"sivut":[{"sivunid":0,"sivuntyypi":"tarina","sivuntekstit":[{"tekstintyyppi":"tarina","teksti":"Minulla on tilill‰ni rahaa 100 000 Euroa. Kuinka suuri osa siit‰ minun kannattaisi sijoittaa kryptovaluuttaan?"}],"sivunvalinnat":[{"valinnantyyppi":"vastaus1","valinnanteksti":"10%","seuraavasivu":2},{"valinnantyyppi":"vastaus2","valinnanteksti":"100%","seuraavasivu":1}],"sivunkuva":""},{"sivunid":1,"sivuntyypi":"palaute","sivuntekstit":[{"tekstintyyppi":"selitys","teksti":"Jarmon sijoitukset eiv‰t tuottaneet mit‰‰n takaisin, joten h‰n joutui myym‰‰n talonsa. ƒl‰ koskaan sijoita kaikkia rahoja, oli kyse sitten kryptovaluutasta tai muista osakkeista. Toki in aina mahdollista, ett‰ omaisuutesi voi kertaheitolla moninkertaistua, mutta koko omaisuuden menett‰minen on hirve‰ riski."}],"sivunvalinnat":[{"valinnantyyppi":"seuraava","valinnanteksti":"Aloita alusta","seuraavasivu":0}],"sivunkuva":""},{"sivunid":2,"sivuntyypi":"palaute","sivuntekstit":[{"tekstintyyppi":"selitys","teksti":"Hyv‰! Sijoituksiin kannattaa laittaa maltillinen m‰‰r‰ rahaa, jonka menett‰minen ei tuota taloudellisia vaikeuksia, jos satut menett‰m‰‰n sen."}],"sivunvalinnat":[{"valinnantyyppi":"seuraava","valinnanteksti":"Seuraava sivu","seuraavasivu":3}],"sivunkuva":""},{"sivunid":3,"sivuntyypi":"tarina","sivuntekstit":[{"tekstintyyppi":"tarina","teksti":"Olen nyt p‰‰tt‰nyt sijoittaa 10 000 euroa kryptovaluuttaan. Kannattaako rahat sijoittaa yhteen vai useisiin valuuttoihin?"}],"sivunvalinnat":[{"valinnantyyppi":"vastaus1","valinnanteksti":"Yhteen valuuttaan","seuraavasivu":4},{"valinnantyyppi":"vastaus2","valinnanteksti":"Useaan valuuttaan","seuraavasivu":5}],"sivunkuva":""},{"sivunid":4,"sivuntyypi":"tarina","sivuntekstit":[{"tekstintyyppi":"tarina","teksti":"Sijoitan nyt sijoitussalkkuni varat vain yhteen kryptovaluuttaa. Mink‰ valuutan valitsisin?"}],"sivunvalinnat":[{"valinnantyyppi":"vastaus1","valinnanteksti":"Bitcoin","seuraavasivu":6},{"valinnantyyppi":"vastaus2","valinnanteksti":"Squid","seuraavasivu":7}],"sivunkuva":""},{"sivunid":5,"sivuntyypi":"tarina","sivuntekstit":[{"tekstintyyppi":"tarina","teksti":"Sijoitan nyt sijoitussalkkuni varat moneen eri valuuttaan. Millaisia kryptovaluuttoja kannattaa valita"}],"sivunvalinnat":[{"valinnantyyppi":"vastaus1","valinnanteksti":"Ei top 10-valuuttoihin kuuluvia, mutta sellaisia, joista h‰n on ottanut selv‰‰","seuraavasivu":7},{"valinnantyyppi":"vastaus2","valinnanteksti":"Hauskan nimisi‰ valuuttoja, jotka eiv‰t ole kovin tunnettuja","seuraavasivu":8}],"sivunkuva":""}]}'



        
        )
        console.debug(this.sivutJSON);
    }
        
    getSivu(id) {
        return this.sivuteriteltyina[id];
    }
    


    luoSivut() {
        
        let sivutolio = this.sivutJSON;
        console.log(this.sivutJSON);

        let sivujenmaara = sivutolio.sivut.length;
        for (let i = 0; i < sivujenmaara; i++) {
            this.sivuteriteltyina.push(
                new Sivu(
                    sivutolio.sivut[i].sivunid, // sivun id
                    sivutolio.sivut[i].sivuntyyppi, // sivun tyyppi
                    sivutolio.sivut[i].sivuntekstit, // sivun tekstit yksi tai useampi 
                    sivutolio.sivut[i].sivunvalinnat, // sivun valinnat
                    sivutolio.sivut[i].sivunkuva  // sivun kuvan osoite
                ));

        }
        console.debug(this.sivuteriteltyina);
        


       
        
    }
        
}
