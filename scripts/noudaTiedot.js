// Ei vaadi muutosta

function noudaTiedot(kysymysID) {
    var XHR = new XMLHttpRequest();
    var parametrit = kysymysID;
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);

        }
    };
    xmlhttp.open("GET", "echo.php" + "?" + parametrit, true);
    xmlhttp.send();
    return XHR;
}