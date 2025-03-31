
document.getElementById("kittyUso").addEventListener("click", function(){
    punteggioTotale += parseFloat(document.getElementById("kittyUso").value);
   
    document.getElementById("valorePunteggio").innerHTML = punteggioTotale;
});
