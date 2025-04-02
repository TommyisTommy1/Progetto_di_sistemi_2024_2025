// Questo e' un commento

// Funzione per acquistare un kitty
function acquistaKitty(i){

    // Prendo il bottone per acquistare un kitty e gli aggiungo un listener per il click
    document.getElementById(kittyShop[i].alt).addEventListener("click", function(){

        // Controllo se il punteggio totale e' sufficiente per acquistare il kitty
        if(punteggioTotale >= kittyShop[i].costo){

            // Creo il bottone per usare il kitty e gli aggiungo un listener per il click
            let bottoneInUso = '<input type="button" class="bottoneUso" value="Usa" onclick="usaKitty(' + i + ')" />';

            // Aggiungo il bottone per usare il kitty e rimuovo quello per acquistare
            document.getElementById(kittyShop[i].alt).innerHTML = bottoneInUso;
            
            // Setto il flag a true per indicare che il kitty e' stato acquistato
            kittyShop[i].acquistato = true;

            // Sottraggo i punti necessari per acquistare il kitty al punteggio totale
            punteggioTotale -= kittyShop[i].costo;

            // Aggiorno il valore del punteggio totale
            document.getElementById("valorePunteggio").innerHTML = punteggioTotale;
        }else{
            // Mostra una notifica nella console causata dall'insufficienza di punti
            console.log("Non hai abbastanza punti per acquistare questo kitty");
        }
    });
}

// Funzione per usare il kitty
function usaKitty(i){

    // Prendo il bottone per usare il kitty e gli aggiungo un listener per il click
    document.getElementById(kittyShop[i].alt).addEventListener("click", function(){

        // Controllo se il kitty e' stato acquistato e quello in uso non e' lo stesso
        if(kittyShop[i].acquistato == true && kittyInUso != i){

            // Aggiungo il bottone per usare il kitty e aggiungo quello per usare
            document.getElementById(kittyShop[kittyInUso].alt).innerHTML = '<input type="button" class="bottoneUso" value="Usa" onclick="usaKitty(' + kittyInUso + ')" />';

            // Modifico l'indicatore del kitty che e' attualmente in uso
            kittyInUso = i;

            // Aggiorno il bottone per usare il kitty con la nuova immagine
            document.getElementById("bottoneKittyUso").innerHTML = '<img src=img/' + kittyShop[i].immagine + ' alt=' + kittyShop[i].alt + '></img>';

            // Setto il punteggio del kitty in uso
            document.getElementById("kittyUso").value = kittyShop[i].punteggio;
        }else{
            // Mostra una notifica nella console causata dall'uso non consentito
            console.log("Gatto gia in uso o te hai modificato il css :|");
        }
    });
}