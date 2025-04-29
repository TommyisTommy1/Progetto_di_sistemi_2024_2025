
document.getElementById("submitRicerca").addEventListener("click", function() {
    // Ottengo quello che si ha inserito sulla barra di ricerca
    var giocoRicerca = document.getElementById("inputRicerca").value;

    // Faccio la chiamata asincrona
    var request = new XMLHttpRequest();
    
    request.onload = function() {
        if (request.status == 200) {
            document.getElementById("rispostaRicerca").innerHTML = request.responseText;
        } else {
            document.getElementById("rispostaRicerca").innerHTML = "La richiesta non è andata a buon fine: " + request.status;
        }
    };
    
    request.open("GET", "chiamateAsincrone/chiamataAsincronaListaVideogiochi.php?giocoRicerca=" + giocoRicerca, true);
    request.send();
});