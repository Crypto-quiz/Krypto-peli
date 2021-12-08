
class TiedonKasittelija {
    sivuteriteltyina = [];
    sivutJSON;
    constructor() {
        
    }

    
    noudaJSON () {
        this.sivutJSON = JSON.parse(
            '{"sivut":[{"sivunid":0,"sivuntyyppi":"tarina","sivuntekstit":[{"tekstintyyppi":"tarina","teksti":"Olen nyt saanut kerättyä tililleni 100 000 euroa. Kryptovaluutallahan voi rikastua vaikka kuinka paljon, joten mieleni tekisi sijoittaa kaikki rahat. En kyllä tiedä, onko se kuitenkaan järkevää... "},{"tekstintyyppi":"kysymys","teksti":"Kuinka monta prosenttia omaisuudestaan Jarmon kannattaisi sijoittaa kryptovaluuttaan?"}],"sivunvalinnat":[{"valinnantyyppi":"vastaus1","valinnanteksti":"100%","oikeavastaus":false,"seuraavasivu":1},{"valinnantyyppi":"vastaus2","valinnanteksti":"10%","oikeavastaus":true,"seuraavasivu":2}],"sivunkuva":""},{"sivunid":1,"sivuntyyppi":"palaute","sivuntekstit":[{"tekstintyyppi":"palaute","teksti":"Jarmon sijoitukset eivät tuottaneet mitään takaisin, joten hän joutui myymään autonsa. Älä koskaan sijoita kaikkia rahoja, oli sitten kyse kryptovaluutasta tai muista osakkeista. Toki on aina mahdollisuus, että koko omaisuutesi voi kertaheitolla moninkertaistua, mutta koko omaisuuden menettäminen on hirveä riski.  "}],"sivunvalinnat":[{"valinnantyyppi":"seuraava","valinnanteksti":"Palaa takaisin","seuraavasivu":0}],"sivunkuva":""},{"sivunid":2,"sivuntyyppi":"tarina","sivuntekstit":[{"tekstintyyppi":"palaute","teksti":"Hyvä! Sijoituksiin kannattaa laittaa maltillinen määrä rahaa, jonka menettäminen ei tuota taloudellisia vaikeuksia."},{"tekstintyyppi":"tarina","teksti":"Olen nyt päättänyt sijoittaa 10 000 euroa kryptovaluuttaan. En tosin oikein tiedä, sopisiko minun sijoittaa se summa vain yhteen valuuttaan, joka vaikuttaa mielenkiintoiselle, vai moneen jännittävään valuuttaan. Molemmissa on kyllä hyvät puolensa. En ole varma, jaksaisinko seurata montaa eri valuutta, mutta toisaalta oli hyvä, että kaikki sijoitukseni eivät olisi vain yhdessä projektissa kiinni.  "},{"tekstintyyppi":"kysymys","teksti":"Kannattaako Jarmon sijoittaa yhteen vai useaan valuuttaan?"}],"sivunvalinnat":[{"valinnantyyppi":"vastaus1","valinnanteksti":"Yhteen valuuttaan","seuraavasivu":3},{"valinnantyyppi":"vastaus2","valinnanteksti":"Useaan valuuttaan","seuraavasivu":4}],"sivunkuva":""},{"sivunid":3,"sivuntyyppi":"tarina","sivuntekstit":[{"tekstintyyppi":"tarina","teksti":"Vain yhteen valuuttaan sijoittaminen tuntuu kyllä näin alkuun paremmalta, eikä minun tarvitse käyttää aikaani monen eri valuutan kurssin kyttäämiseen. Nyt täytyy vain päättää valuutta. Bitcoin on kaikista vakain valuutta, mutta Squidia ostamalla pääsisin kuulemma pelaamaan uutta Squid Game-peliä! Pidin siitä sarjastakin todella paljon. "},{"tekstintyyppi":"kysymys","teksti":"Sijoittaako Jarmo tuttuun ja turvalliseen Bitcoiniin vai uuteen ja jännittävään Squidiin? "}],"sivunvalinnat":[{"valinnantyyppi":"vastaus1","valinnanteksti":"Bitcoin","oikeavastaus":true,"seuraavasivu":5},{"valinnantyyppi":"vastaus2","valinnanteksti":"Squid","oikeavastaus":false,"seuraavasivu":6}],"sivunkuva":""},{"sivunid":4,"sivuntyyppi":"tarina","sivuntekstit":[{"tekstintyyppi":"tarina","teksti":"Moneen valuuttaan sijoittaminen on varmasti parempi ratkaisu. Nyt pääsen kunnolla sijoittamisen makuun! Nyt täytyy sitten päättää, millaisia valuuttoja haluan ostaa... Minulla on joitakin vaihtoehtoja, jotka eivät ole kovin suosittuja, mutta joiden projekteihin tutustumiseen olen käyttänyt aikaa, jotta tiedän niiden olevan luotettavia valuuttoja. Toisaalta taas olisi hauska vain valita hauskan nimisiä meemivaluuttoja, joille voidaan sitten Martin kanssa naureskella. "},{"tekstintyyppi":"kysymys","teksti":"Millaisiin valuuttoihin Jarmon kannattaa sijoittaa? "}],"sivunvalinnat":[{"valinnantyyppi":"vastaus1","valinnanteksti":"Ei suosituimpiin valuuttoihin kuuluviin, mutta sellaisiin, joista hän on ottanut selvää ","oikeavastaus":true,"seuraavasivu":7},{"valinnantyyppi":"vastaus2","valinnanteksti":"Hauskan nimisiin valuuttoihin, jotka eivät ole kovin tunnettuja ","oikeavastaus":false,"seuraavasivu":8}],"sivunkuva":""},{"sivunid":5,"sivuntyyppi":"tarina","sivuntekstit":[{"tekstintyyppi":"palaute","teksti":"Hienoa! Kannattaa aina valita vakaita ja luotettavia valuuttoja jonkun uuden ja salamyhkäisen valuutan sijaan. "},{"tekstintyyppi":"tarina","teksti":"No niin, nyt minä vihdoinkin omistan oikeasti kryptovaluuttaa! Useimmat kryptovaluutan omistajat kuulemma säilyttävät varojaan virtuaalilompakossa, mutta ne vaatisivat joko kaksivaiheisen tunnistautumisen, mihin en jaksa käyttää aikaa, tai sormenjälkitunnistimen, mitä minun puhelimessani ei ole. Ja sinne täytyisi niiden lisäksi vielä keksiä jokin uusi salasana! En tiedä jaksanko sellaista, Marttikin kuulemma säilyttää kaikki kryptovaluuttansa vain kaupankäyntialustalla. Mitähän tässä nyt tekisi... "},{"tekstintyyppi":"kysymys","teksti":"Kannattaisiko Jarmon jaksaa tehdä virtuaalilompakkotunnukset vai käyttääkö hän varojen säilyttämiseen pelkkää kaupankäyntialustaa? "}],"sivunvalinnat":[{"valinnantyyppi":"vastaus1","valinnanteksti":"Virtuaalilompakko ","oikeavastaus":true,"seuraavasivu":9},{"valinnantyyppi":"vastaus2","valinnanteksti":"Kaupankäyntialusta ","seuraavasivu":10}],"sivunkuva":""},{"sivunid":6,"sivuntyyppi":"palaute","sivuntekstit":[{"tekstintyyppi":"palaute","teksti":"Squid-projekti paljastui huijaukseksi ja Jarmo menetti kaikki sijoittamansa rahat. Netflix-sarja Squid Gamen mukaan nimetty kryptovaluutta olikin pelkkää huijausta.  Asiantuntijat myös varoittelivat ennen huijauksen paljastumista projektin pätevyydestä, sillä squid-tokeneita ei pystynyt myymään eteenpäin ja sen kotisivutkin näyttivät epäammattimaiselta.  Squidin tekijät ansaitsivat huijauksesta 2,8 miljoonaa euroa.  "}],"sivunvalinnat":[{"valinnantyyppi":"seuraava","valinnanteksti":"Palaa takaisin","seuraavasivu":2}],"sivunkuva":""},{"sivunid":7,"sivuntyyppi":"tarina","sivuntekstit":[{"tekstintyyppi":"palaute","teksti":"Hienoa! Muista aina ottaa selvää kaikista projekteista, joihin laitat rahaa. "},{"tekstintyyppi":"tarina","teksti":"No niin, nyt minä vihdoinkin omistan oikeasti kryptovaluuttaa! Useimmat kryptovaluutan omistajat kuulemma säilyttävät varojaan virtuaalilompakossa, mutta ne vaatisivat joko kaksivaiheisen tunnistautumisen, mihin en jaksa käyttää aikaa, tai sormenjälkitunnistimen, mitä minun puhelimessani ei ole. Ja sinne täytyisi niiden lisäksi vielä keksiä jokin uusi salasana! En tiedä jaksanko sellaista, Marttikin kuulemma säilyttää kaikki kryptovaluuttansa vain kaupankäyntialustalla. Mitähän tässä nyt tekisi... "},{"tekstintyyppi":"kysymys","teksti":"Kannattaisiko Jarmon jaksaa tehdä virtuaalilompakkotunnukset vai käyttääkö hän varojen säilyttämiseen pelkkää kaupankäyntialustaa? "}],"sivunvalinnat":[{"valinnantyyppi":"vastaus1","valinnanteksti":"Virtuaalilompakko ","oikeavastaus":true,"seuraavasivu":9},{"valinnantyyppi":"vastaus2","valinnanteksti":"Kaupankäyntialusta ","seuraavasivu":10}],"sivunkuva":""},{"sivunid":8,"sivuntyyppi":"palaute","sivuntekstit":[{"tekstintyyppi":"palaute","teksti":"Yksi Jarmon valitsemista valuutoista rahoitti rikollisjärjestöä, jonka takia Jarmoa syytettiin rikoskumppanuudesta. Jarmo selvisi syytteistä, mutta rahojaan hän ei koskaan saanut takaisin. Ota aina kunnolla selvää kaikista projekteista, joihin sijoitat. Jos joku asia tuntuu vähänkin epäilyttävältä, älä missään nimessä kokeile onneasi ja laita rahojasi siihen.  "}],"sivunvalinnat":[{"valinnantyyppi":"seuraava","valinnanteksti":"Palaa takaisin","seuraavasivu":2}],"sivunkuva":""},{"sivunid":9,"sivuntyyppi":"tarina","sivuntekstit":[{"tekstintyyppi":"palaute","teksti":"Hyvin menee! Virtuaalilompakko on aina turvallisin vaihtoehto, jos niistä löytyy sormenjälki- tai kaksivaiheinen tunnistautuminen "},{"tekstintyyppi":"tarina","teksti":"Nyt, kun olen päässyt sijoittamisen makuun, olen huomannut markkinoilla erään kryptovaluutan, jonka arvo on suorassa kasvussa.  Martti on myös kertonut ostaneensa kyseistä valuuttaa, ja siitä on kehittynyt suorastaan trendi. Pelkään jääväni kaikesta paitsi, jos en nyt sijoita, sillä jos arvo vielä nousee, voin tienata todella hyvin. Toisaalta nopeasti nousevissa valuutoissa on aina riskinsä. "},{"tekstintyyppi":"kysymys","teksti":"Mitä Jarmon kannattaa tehdä? "}],"sivunvalinnat":[{"valinnantyyppi":"vastaus1","valinnanteksti":"Ostaa valuuttaa ","oikeavastaus":false,"seuraavasivu":11},{"valinnantyyppi":"vastaus2","valinnanteksti":"Ei osta valuuttaa ","oikeavastaus":true,"seuraavasivu":12}],"sivunkuva":""},{"sivunid":10,"sivuntyyppi":"tarina","sivuntekstit":[{"tekstintyyppi":"tarina","teksti":"Aion säilyttää kaikki kryptovaluuttani kaupankäyntialustalla. Eipähän tarvitse miettiä mitään monimutkaisia tunnistautumisia! Toki tässä on aina suuremmat riskit tulla hakkeroiduksi... Voisin nostaa turvallisuuden tunnetta keksimällä jonkin uuden vaikean salasanan, mutta vanhakin on kyllä pitänyt minut turvassa, vaikka olen käyttänyt sitä samaa kaikkialla jo kymmeniä vuosia! En myöskään jaksaisi ruveta kirjoittelemaan mitään vaikeampia ylös. "},{"tekstintyyppi":"kysymys","teksti":"Keksiikö Jarmo uuden vaikeamman salasanan vai käyttää vanhaa helposti muistettavaa salasanaa? "}],"sivunvalinnat":[{"valinnantyyppi":"vastaus1","valinnanteksti":"Vanha salasana ","oikeavastaus":false,"seuraavasivu":13},{"valinnantyyppi":"vastaus2","valinnanteksti":"Uusi salasana ","oikeavastaus":true,"seuraavasivu":14}],"sivunkuva":""},{"sivunid":11,"sivuntyyppi":"palaute","sivuntekstit":[{"tekstintyyppi":"palaute","teksti":"Kryptovaluutan hinta alkoi luisua nopeasti ja Jarmo teki paljon tappiota, koska ei osannut myydä valuuttaa oikealla hetkellä "}],"sivunvalinnat":[{"valinnantyyppi":"seuraava","valinnanteksti":"Palaa takaisin","seuraavasivu":9}],"sivunkuva":""},{"sivunid":12,"sivuntyyppi":"tarina","sivuntekstit":[{"tekstintyyppi":"palaute","teksti":"Mahtavaa! Valuutat, joiden arvo on suorassa kasvussa, ovat aina riskialttiita "},{"tekstintyyppi":"tarina","teksti":"No nyt olen löytänyt projektin, jossa ei ole vielä tapahtunut yhtään nousua eikä laskua. Sitä voi myös ostaa todella halvalla! Eihän sitä koskaan voi tietää mitä sille tapahtuu, mutta minulla on tunne, että se lähtee nousuun ennemmin tai myöhemmin. "},{"tekstintyyppi":"kysymys","teksti":"Mitä Jarmo tekee? "}],"sivunvalinnat":[{"valinnantyyppi":"vastaus1","valinnanteksti":"Ostaa valuuttaa ","oikeavastaus":false,"seuraavasivu":15},{"valinnantyyppi":"vastaus2","valinnanteksti":"Ei osta valuuttaa ","oikeavastaus":true,"seuraavasivu":16}],"sivunkuva":""},{"sivunid":13,"sivuntyyppi":"palaute","sivuntekstit":[{"tekstintyyppi":"palaute","teksti":"Jarmon salasana paljastui erään sosiaalisen median tietomurron kautta, jossa hän käytti samaa salasanaa, kuin kaupankäyntialustalla. Nyt kaikki hänen ostamansa kryptovaluutta on poissa. Turvaudumme usein ajatukseen, että ei meidän salasanaamme kukaan ikinä tule keksimään, kun olemme käyttäneet sitä joka paikassa jo vuosia. Ei kuitenkaan voi koskaan tietää, milloin tietomurto osuu kohdalle, joten muista aina käyttää eri salasanoja eri paikoissa ja tee niistä mahdollisimman monimutkaisia. "}],"sivunvalinnat":[{"valinnantyyppi":"seuraava","valinnanteksti":"Palaa takaisin","seuraavasivu":10}],"sivunkuva":""},{"sivunid":14,"sivuntyyppi":"tarina","sivuntekstit":[{"tekstintyyppi":"palaute","teksti":"Hyvin menee! Muista aina keksiä uusi monimutkainen salasana minimoidaksesi hakkerin uhriksi joutuminen. "},{"tekstintyyppi":"tarina","teksti":"Nyt, kun olen päässyt sijoittamisen makuun, olen huomannut markkinoilla erään kryptovaluutan, jonka arvo on suorassa kasvussa.  Martti on myös kertonut ostaneensa kyseistä valuuttaa, ja siitä on kehittynyt suorastaan trendi. Pelkään jääväni kaikesta paitsi jos en nyt sijoita, sillä jos arvo vielä nousee, voin tienata todella hyvin. Toisaalta nopeasti nousevissa valuutoissa on aina riskinsä. "},{"tekstintyyppi":"kysymys","teksti":"Mitä Jarmon kannattaa tehdä? "}],"sivunvalinnat":[{"valinnantyyppi":"vastaus1","valinnanteksti":"Ostaa valuuttaa ","oikeavastaus":false,"seuraavasivu":11},{"valinnantyyppi":"vastaus2","valinnanteksti":"Ei osta valuuttaa ","oikeavastaus":true,"seuraavasivu":12}],"sivunkuva":""},{"sivunid":15,"sivuntyyppi":"palaute","sivuntekstit":[{"tekstintyyppi":"palaute","teksti":"Kryptovaluutta-projektin kehittäjät olivat lopettaneet projektin, joten sen takia sen arvo pysyi samana ja sitä pystyi ostamaan halvalla. Jarmon sijoitukset menivät siis hukkaan. Matalalla pysyvä arvo voi tietenkin joissain tapauksissa johtaa valuutan kasvamiseen ja siitä voi näin saada hyvät tuotot. Yleensä kannattaa kuitenkin sijoittaa tällaisiin kryptovaluuttoihin varautuen ja selvittäen sen taustat.  "}],"sivunvalinnat":[{"valinnantyyppi":"seuraava","valinnanteksti":"Palaa takaisin","seuraavasivu":12}],"sivunkuva":""},{"sivunid":16,"sivuntyyppi":"tarina","sivuntekstit":[{"tekstintyyppi":"palaute","teksti":"Juuri näin! Yleensä kannattaa suhtautua tällaisiin valuuttoihin varautuen, sillä  sen projekti on esimerkiksi voitu jo lopettaa. "},{"tekstintyyppi":"tarina","teksti":"Olemme nyt sopineet Martin kanssa, että maksan hänelle velkani kryptovaluutalla. En ole kuitenkaan täysin varma, muistanko Martin osoitetta oikein, johon rahat täytyy lähettää... Olen kuitenkin aika varma, että muistan osoitteen ulkoa oikein! Kai siirron saa jotenkin korjattua, jos osoite menee väärin. "},{"tekstintyyppi":"kysymys","teksti":"Tarkistaako Jarmo vielä osoitteen oikeaksi? "}],"sivunvalinnat":[{"valinnantyyppi":"vastaus1","valinnanteksti":"Ei","oikeavastaus":false,"seuraavasivu":17},{"valinnantyyppi":"vastaus2","valinnanteksti":"Kyllä","oikeavastaus":true,"seuraavasivu":18}],"sivunkuva":""},{"sivunid":17,"sivuntyyppi":"palaute","sivuntekstit":[{"tekstintyyppi":"palaute","teksti":"Jarmon muistama osoite ei ollut oikea, joten hän lähetti kryptovaluutat jollekin toiselle. Martti kuitenkin vaati saada hänelle luvatut valuutat, joten Jarmo joutui maksamaan tuplamäärän lähettäessään rahat vielä oikeaan osoitteeseen. Kryptovaluuttojen kanssa tekemäsi virheet ovat peruuttamattomia ja sinun vastuullasi. Virheiden sattuessa ei voi soittaa pankkiin, että esimerkiksi jokin siirto täytyy perua. "}],"sivunvalinnat":[{"valinnantyyppi":"seuraava","valinnanteksti":"Palaa takaisin","seuraavasivu":16}],"sivunkuva":""},{"sivunid":18,"sivuntyyppi":"tarina","sivuntekstit":[{"tekstintyyppi":"palaute","teksti":"Teit oikein! Jos olisit tehnyt virheen, et olisi vain voinut soittaa pankkiin ja pyytää siirron perumista. "},{"tekstintyyppi":"tarina","teksti":"Martin innoittamana olen liittynyt Kryptovaluutan Sijoittajat-nimiseen some-ryhmään.  Kyseisessä ryhmässä olen nähnyt joidenkin tuntemattomien ihmisten suosittelevan erääseen uuteen kryptovaluuttaan sijoittamista kovalla rahalla, koska he ovat täysin varmoja, että sen arvo lähtee vielä nousuun. En tosiaan kyllä tunne heitä oikeassa elämässä, mutta olemme kuitenkin samassa ryhmässä, joten heidän arviointikykyynsä voisin ehkä kuitenkin luottaa. "},{"tekstintyyppi":"kysymys","teksti":"Mitä Jarmo tekee? "}],"sivunvalinnat":[{"valinnantyyppi":"vastaus1","valinnanteksti":"Antaa asian olla ","oikeavastaus":true,"seuraavasivu":19},{"valinnantyyppi":"vastaus2","valinnanteksti":"Sijoittaa valuuttaan ","oikeavastaus":false,"seuraavasivu":20}],"sivunkuva":""},{"sivunid":19,"sivuntyyppi":"tarina","sivuntekstit":[{"tekstintyyppi":"palaute","teksti":"Juurikin näin! Kyseessä olisi voinut olla vaikka huijausprojekti "},{"tekstintyyppi":"tarina","teksti":"Markkinoille on tullut uusi kryptovaluutta nimeltään SpaceX-coin. Elon Musk twiittasi siitä, joten sen arvo on noussut hurjasti ylöspäin. Minua vähän jännittää sijoittaa siihen, mutta en haluaisi myöskään jäädä pois junasta, jos sen avulla voisikin tehdä hyvät rahat. Musk on kuitenkin ennenkin saanut valuuttojen arvoja nousemaan pysyvästi. "},{"tekstintyyppi":"kysymys","teksti":"Mitä Jarmon kannattaisi tehdä? "}],"sivunvalinnat":[{"valinnantyyppi":"vastaus1","valinnanteksti":"Sijoittaa kaikki rahansa ","oikeavastaus":false,"seuraavasivu":21},{"valinnantyyppi":"vastaus2","valinnanteksti":"Sijoittaa 1000 euroa ","oikeavastaus":true,"seuraavasivu":22},{"valinnantyyppi":"vastaus3","valinnanteksti":"Ei sijoita mitään ","oikeavastaus":false,"seuraavasivu":23}],"sivunkuva":""},{"sivunid":20,"sivuntyyppi":"palaute","sivuntekstit":[{"tekstintyyppi":"palaute","teksti":"Kyseessä olikin massahuijaus, jossa moni henkilö lyöttäytyi yhteen suosittelemaan kehittämäänsä kryptovaluuttaa, jolla ei kuitenkaan oikeasti ollut mitään arvoa. Jarmo siis menetti sijoittamansa rahat. Huijaukset kryptovaluuttojen ohella ovat hyvin yleisiä ja kaikkeen somessa näkemäänsä tietoon kannattaa muutenkin suhtautua varautuen. "}],"sivunvalinnat":[{"valinnantyyppi":"seuraava","valinnanteksti":"Palaa takaisin","seuraavasivu":18}],"sivunkuva":""},{"sivunid":21,"sivuntyyppi":"palaute","sivuntekstit":[{"tekstintyyppi":"palaute","teksti":"Jarmo menetti kaikki rahansa, kun SpaceX-coinin arvo romahti muutaman viikon päästä. Kryptovaluuttojen arvo voi muuttua radikaalisti lyhyessäkin ajassa, ja niiden kanssa täytyy olla tarkkana, jollei kyseessä sitten ole jokin kauan vakaana pysynyt valuutta.  "}],"sivunvalinnat":[{"valinnantyyppi":"seuraava","valinnanteksti":"Palaa takaisin","seuraavasivu":19}],"sivunkuva":""},{"sivunid":22,"sivuntyyppi":"tarina","sivuntekstit":[{"tekstintyyppi":"palaute","teksti":"Hyvin tehty! Valuutan arvo nousi viikossa taivaisiin, joten Jarmo myy osan siitä  hyvällä voitolla. "},{"tekstintyyppi":"tarina","teksti":"Huomasin somea selatessa uutisen eräästä julkkiksesta, joka on sijoittanut erääseen kryptovaluuttaan ja saanut tuhansien eurojen voitot. Jutussa on linkki sivustolle, joka pyytää luottokortin tietoja valuuttaan sijoittamista varten. Tällainen toimintatapa on vähän kyllä outoa ja voisin ehkä tarkistaa tämän uutisen luotettavasta lähteestä mutta toisaalta, raha ei odota! "},{"tekstintyyppi":"kysymys","teksti":"Annatko Jarmon laittaa luottotietonsa heti sisään? "}],"sivunvalinnat":[{"valinnantyyppi":"vastaus1","valinnanteksti":"Ei","oikeavastaus":true,"seuraavasivu":24},{"valinnantyyppi":"vastaus2","valinnanteksti":"Kyllä","oikeavastaus":false,"seuraavasivu":25}],"sivunkuva":""},{"sivunid":23,"sivuntyyppi":"palaute","sivuntekstit":[{"tekstintyyppi":"palaute","teksti":"SpaceX-coinista tuli uusi suuri kryptovaluutta ja Jarmo menetti mahdollisuutensa. Hän tuli tästä niin surulliseksi, että myi kaikki kryptovaluuttansa tappiolla. Kryptovaluuttojen arvot voivat 100-kertaistua vain muutamassa kuukaudessa. "}],"sivunvalinnat":[{"valinnantyyppi":"seuraava","valinnanteksti":"Palaa takaisin","seuraavasivu":19}],"sivunkuva":""},{"sivunid":24,"sivuntyyppi":"tarina","sivuntekstit":[{"tekstintyyppi":"palaute","teksti":"Hienosti tehty! Kyseessä oli tunnettu huijausprojekti, johon jo monet olivat menettäneet rahansa. "},{"tekstintyyppi":"tarina","teksti":"Selailin taas tapani mukaan illalla uusia kryptovaluuttoja, joihin sijoittaa. Löysinkin yhden mielenkiintoisen, josta otin selvää ja kaikki vaikuttaisi olevan hyvin. Nyt täytyisi enää mennä kaupankäyntialustalle ostamaan valuuttaa. "},{"tekstintyyppi":"kysymys","teksti":"Mitä kautta Jarmo siirtyy kaupankäyntialustalle? "}],"sivunvalinnat":[{"valinnantyyppi":"vastaus1","valinnanteksti":"Googlaamalla kaupankäyntialustan nimen ","oikeavastaus":false,"seuraavasivu":26},{"valinnantyyppi":"vastaus2","valinnanteksti":"Kirjoittamalla oikean osoitteen osoiteriville ","oikeavastaus":true,"seuraavasivu":27}],"sivunkuva":""},{"sivunid":25,"sivuntyyppi":"palaute","sivuntekstit":[{"tekstintyyppi":"palaute","teksti":"Juttu paljastuikin huijaukseksi ja Jarmon koko tili tyhjennettiin! Älä luota kaikkiin uutisiin, joita näet internetissä. Kryptovaluuttaa kannattaa ostaa vain luotettavilta kaupankäyntisivustoilta. "}],"sivunvalinnat":[{"valinnantyyppi":"seuraava","valinnanteksti":"Palaa takaisin","seuraavasivu":22}],"sivunkuva":""},{"sivunid":26,"sivuntyyppi":"palaute","sivuntekstit":[{"tekstintyyppi":"palaute","teksti":"Kyseessä olikin huijaussivusto ja Jarmon sijoittamat rahat menivät huijareille. Huijareiden on helppo saada tekemänsä nettisivusto Googlen hakutulosten kärkeen.  Kirjoita aina osoiteriville sivuston osoite, jolle haluat mennä, jos kyseessä on pankki tai muu sivusto, jolla on sinun yksityisiä tietojasi tai varojasi.  "}],"sivunvalinnat":[{"valinnantyyppi":"seuraava","valinnanteksti":"Palaa takaisin","seuraavasivu":24}],"sivunkuva":""},{"sivunid":27,"sivuntyyppi":"palaute","sivuntekstit":[{"tekstintyyppi":"palaute","teksti":"Oikein!  Huijareiden on helppo saada tekemänsä nettisivusto Googlen hakutulosten kärkeen.  Kirjoita aina osoiteriville sivuston osoite, jolle haluat mennä, jos kyseessä on pankki tai muu sivusto, jolla on sinun yksityisiä tietojasi tai varojasi.   "},{"tekstintyyppi":"tarina","teksti":"Kiitos, olet huipputyyppi! Autoit minua selviämään kryptovaluutan maailmassa, ja olenkin sen avulla onnistunut kerämään tarpeeksi varoja omakotitalon ostoon! Sinne voin nyt asettua rakkaideni kanssa. "}],"sivunvalinnat":[{"valinnantyyppi":"seuraava","valinnanteksti":"Palaa takaisin","seuraavasivu":0}],"sivunkuva":""}]}'



        
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
