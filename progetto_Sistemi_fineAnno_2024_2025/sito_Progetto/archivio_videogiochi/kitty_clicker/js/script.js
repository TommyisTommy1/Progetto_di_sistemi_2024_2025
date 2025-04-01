
let shop = "";

for (let i = 0; i < kittyShop.length; i++) {
    shop += "<td class='kitty'>";

    shop += '<img src="img/' + kittyShop[i].immagine + '" alt=' + kittyShop[i].alt + '/>';
    shop += '<h3>' + kittyShop[i].nome +'</h3>';
    shop += '<p>Costo: <span class="costo">' + kittyShop[i].costo + '</span></p>';
    shop += '<p>Punteggio: <span class="punteggio">' + kittyShop[i].punteggio + '</span></p>';
    shop += '<div id=' + kittyShop[i].alt + '>';
    if(kittyShop[i].acquistato == false){
        shop += '<input type="button" class="acquista" value="Acquista" />';
    }else{
        kittyInUso = i;
        shop += '<input type="button" class="bottoneUso" value="Usa" />';
    }
    shop += '</div>';

    shop += "</td>";
}

shop += '<td class="kitty" style="background-color: seagreen;"><h3>Coming <br> Soon</h3></td>';
document.getElementById("shopKitty").innerHTML = shop;

// ----------------------------------------------------------------

for(let i = 0; i < kittyShop.length; i++){
    if(kittyShop[i].acquistato == false){
        document.getElementById(kittyShop[i].alt).addEventListener("click", function(){
            if(punteggioTotale >= kittyShop[i].costo){
                let bottoneInUso = '<input type="button" class="bottoneUso" value="Usa" />';
                document.getElementById(kittyShop[i].alt).innerHTML = bottoneInUso;

                kittyShop[i].acquistato = true;
                punteggioTotale -= kittyShop[i].costo;
                document.getElementById("valorePunteggio").innerHTML = punteggioTotale;
            }else{
                console.log("Non abbastanza punti");
            }
        });
    }
    console.log("Gatto: " + i + "kittyShop: " + kittyShop[i].nome);
}

// ----------------------------------------------------------------

for(let i = 0; i < kittyShop.length; i++){
    if(kittyShop[i].acquistato == true && kittyShop[i].inUso == false){
        document.getElementById(kittyShop[i].alt).addEventListener("click", function(){
            kittyShop[kittyInUso].inUso = false;
            kittyShop[kittyInUso].alt = '<input type="button" class="bottoneUso" value="Usa" />';
            kittyInUso = i;
    
            document.getElementById("bottoneKittyUso").innerHTML = '<img src=img/' + kittyShop[i].immagine + ' alt=' + kittyShop[i].alt + '></img>';
            document.getElementById("kittyUso").value = kittyShop[i].punteggio;
            document.getElementById("immagineKittyUso").value = kittyShop[i].immagine;
        });
    }
}

// ----------------------------------------------------------------

document.getElementById("bottoneKittyUso").addEventListener("click", function(){
    punteggioTotale += parseFloat(document.getElementById("kittyUso").value);
   
    document.getElementById("valorePunteggio").innerHTML = punteggioTotale;
});

// ----------------------------------------------------------------

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