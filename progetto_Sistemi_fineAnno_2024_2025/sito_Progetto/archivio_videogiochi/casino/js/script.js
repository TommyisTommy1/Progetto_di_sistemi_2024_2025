

let slot = "";

slot += creaListaSlot();

document.getElementById("listaCarteSlot").innerHTML = slot;

slot = "";

slot += creaSlotMachine();

document.getElementById("slotMachine").innerHTML = slot;

let lista = document.getElementsByClassName("slotSlotMachine");

let bottone = document.getElementById("bottoneSlotSlot");

bottone.addEventListener("click", function() {
    bottone.disabled = true;

    for(let i = 0; i < slotMachine.numeroRuote; i++){

        setTimeout(() => {

            for(let ii = 0; ii < slotMachine.numeroRuote * slotMachine.emojiSlotVisibili; ii += slotMachine.numeroRuote){

                lista[i + ii].classList.add("animazione");
            }

            // Posizione vertiale da sinistra a destra   x ----> x
            for(let ii = 0; ii < slotMachine.numeroRuote; ii++){

                // Riposizionamento delle emoticon delle slot dal basso all'alto
                for(let iii = slotMachine.emojiSlotVisibili - 1; iii > 0; iii--){
                    
                    // Prendo il valore prima dell'ultimo, lo assegno come ultimo e continuo fino a che non arrivo al secondo
                    lista[iii * slotMachine.numeroRuote + ii].innerHTML = lista[(iii - 1) * slotMachine.numeroRuote + ii].innerHTML;
                }

                // Inserisco una emoticon random dalla lista delle slot in prima posizione
                lista[ii].innerHTML = "&#" + slotMachine.tipi[Math.floor(Math.random() * slotMachine.tipi.length)] + ";";
            }
            
            setTimeout(() => {

                for(let ii = 0; ii < slotMachine.numeroRuote * slotMachine.emojiSlotVisibili; ii += slotMachine.numeroRuote){
                    lista[ii + i].classList.remove("animazione");
                }

                // Riabilita il bottone solo quando tutte le animazioni sono finite
                if (i === slotMachine.numeroRuote - 1) {
                    bottone.disabled = false;
                }
            }, 3500);
        }, i * 750);
    }
});
