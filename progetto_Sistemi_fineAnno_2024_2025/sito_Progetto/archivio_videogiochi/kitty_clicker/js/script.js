// Questo e' un commento
// Script di javascript che serve per gestire la pagina web e i suoi eventi

// Variabile locale
let shop = "";

// Creo lo shop dei kitty
for (let i = 0; i < kittyShop.length; i++) {
    // Aggiungo una cella allo shop per il kitty
    shop += "<td class='kitty'>";

    // Aggiungo l'immagine del kitty allo shop
    shop += '<img src="img/' + kittyShop[i].immagine + '" alt=' + kittyShop[i].alt + '/>';

    // Aggiungo il nome del kitty allo shop
    shop += '<h3>' + kittyShop[i].nome +'</h3>';

    // Aggiungo il costo del kitty allo shop
    shop += '<p>Costo: <span class="costo">' + kittyShop[i].costo + '</span></p>';

    // Aggiungo il punteggio del kitty allo shop
    shop += '<p>Punteggio: <span class="punteggio">' + kittyShop[i].punteggio + '</span></p>';

    // Aggiungo il bottone per acquistare e/o usare il kitty allo shop
    shop += '<div id=' + kittyShop[i].alt + '>';

    if(kittyShop[i].acquistato == false){
        // Se il kitty non e' stato acquistato, il bottone lo inserisco
        shop += '<input type="button" class="acquista" value="Acquista" onclick="acquistaKitty(' + i + ')" />';
    }

    // Aggiungo il bottone per usare il kitty allo shop
    

    if(kittyShop[i].acquistato == true){
        // Se il kitty e' stato acquistato, inserisco il bottone per usarlo
        shop += '<input type="button" class="bottoneUso" value="Usa" onclick="usaKitty(' + i + ')" />';
    }
    shop += '</div>';

    // Fine cella
    shop += "</td>";
}

// Inserisco una cella con un testo di default per dire che verranno aggiunti altri kitty allo shop
shop += '<td class="kitty" style="background-color: seagreen;"><h3>Coming <br> Soon</h3></td>';

// Assegno lo shop alla tabella che lo conterra'
document.getElementById("shopKitty").innerHTML = shop;

// ----------------------------------------------------------------

// Evento per il bottone che permette di aggiungere un punteggio al punteggio totale
document.getElementById("bottoneKittyUso").addEventListener("click", function(){

    // Ottengo il valore del kitty in uso e lo sommo al punteggio che ho
    punteggioTotale += kittyShop[kittyInUso].punteggio;
   
    // Assegno il nuovo valore al punteggio totale nella pagina
    document.getElementById("valorePunteggio").innerHTML = punteggioTotale;
});

// ----------------------------------------------------------------

// Evento per il bottone che permette di acquistare il bonus
document.getElementById("compraBonus").addEventListener("click", function(){

    // Costo del bonus 1000 punti
    let costo = 1000;

    // Controllo se ho abbastanza punteggio per acquistare il bonus 1000 punti 1 volta sola
    if(punteggioTotale >= costo){

        // Tolgo dal punteggio il costo
        punteggioTotale -= costo;

        // Genero il bonus casuale (minimo = 500, massimo = 1500)
        let bonus = Math.floor(Math.random() * costo) + costo/2;

        // Aggiungo il bonus al punteggio totale
        punteggioTotale += bonus;

        // Mostro il bonus ottenuto
        document.getElementById("risultatoBonus").innerHTML = bonus;

        // Assegno il nuovo valore al punteggio totale nella pagina
        document.getElementById("valorePunteggio").innerHTML = punteggioTotale;
    }else{
        // Se non ho abbastanza punteggio, mostro un messaggio di errore
        document.getElementById("risultatoBonus").innerHTML = ("Non hai abbastanza punteggio!");
    }
});