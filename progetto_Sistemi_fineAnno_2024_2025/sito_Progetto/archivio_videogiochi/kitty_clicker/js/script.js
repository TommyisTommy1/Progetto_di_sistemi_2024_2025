
let shop = "";

for (let i = 0; i < kittyShop.length; i++) {
    shop += "<td class='kitty'>";

    shop += '<img src="img/' + kittyShop[i].immagine + '" alt=' + kittyShop[i].alt + '/>';
    shop += '<h3>' + kittyShop[i].nome +'</h3>';
    shop += '<p>Costo: <span class="costo">' + kittyShop[i].costo + '</span></p>';
    shop += '<p>Punteggio: <span class="punteggio">' + kittyShop[i].punteggio + '</span></p>';
    shop += '<div class="inUso">';
    if(kittyShop[i].acquistato == false){
        shop += '<input type="button" class="acquista" value="Acquista"></input>';
    }
    shop += '</div>';
            
    shop += "</td>";
}

shop += '<td class="kitty" style="background-color: seagreen;"><h3>Coming <br> Soon</h3></td>';
document.getElementById("shopKitty").innerHTML = shop;


document.getElementById("bottoneKittyUso").addEventListener("click", function(){
    punteggioTotale += parseFloat(document.getElementById("kittyUso").value);
   
    document.getElementById("valorePunteggio").innerHTML = punteggioTotale;
});


document.getElementById("compraBonus").addEventListener("click", function(){
    if(punteggioTotale >= 1000){
        let bonus = Math.floor(Math.random() * 100) + 250;
        punteggioTotale -= bonus;
        punteggioTotale += bonus;
        document.getElementById("valorePunteggio").innerHTML = punteggioTotale;
    }else{
        alert("Non hai abbastanza punteggio!");
    }
});