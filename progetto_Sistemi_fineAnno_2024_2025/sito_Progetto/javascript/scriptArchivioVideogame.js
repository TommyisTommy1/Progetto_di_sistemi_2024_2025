
document.getElementById("bottoneOrdinatore").addEventListener("click", function(){
    let ordinamento = document.getElementById("selectOrdinatore").value;

    // Faccio la chiamata asincrona
    var request = new XMLHttpRequest();
    
    request.onload = function() {
        if (request.status == 200) {
            document.getElementById("videogiochiOrdinati").innerHTML = request.responseText;
        } else {
            document.getElementById("videogiochiOrdinati").innerHTML = "La richiesta non è andata a buon fine: " + request.status;
        }
    };
    
    request.open("POST", "chiamateAsincrone/chiamataAsincronaOrdinamentoListaVideogiochi.php", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send("ordinamento=" + encodeURIComponent(ordinamento));
});