function aloitaKysely() {
    var valittavaKysymysID = 1;
    var oikeitaVastauksia = 0;
    
    var oikeaVastausVanha = 2;

    luoNappulat();
    document.getElementById('nappula1').removeAttribute("onclick");
    lisaaTapahtumanKuuntelijat();

    valittavaKysymysID = valittavaKysymysID + 1;

    function lisaaTapahtumanKuuntelijat() {
        document.getElementById("nappula1").addEventListener("click", nappulaNapsautettu);
        document.getElementById("nappula2").addEventListener("click", nappulaNapsautettu);
        document.getElementById("nappula3").addEventListener("click", nappulaNapsautettu);
        document.getElementById("nappula4").addEventListener("click", nappulaNapsautettu);
    }
}

    

