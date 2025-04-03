// Questo e' un commento

// Funzione per modificare il punteggio
function modificaPunteggio(){

    // Ottengo il valore del kitty in uso e lo sommo al punteggio che ho
    punteggioTotale += kittyShop[kittyInUso].punteggio;
}

function bonus(){
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
}

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