

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

            for(let ii = 0; ii < slotMachine.numeroRuote; ii++){

                

                lista[ii].innerHTML = "&#" + slotMachine.tipi[Math.floor(Math.random() * slotMachine.tipi.length)] + ";";
            }

            // Dopo un certo tempo, cambia il contenuto e rimuovi l'animazione
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

/*

for(let i = 0; i < lista.length; i += slotMachine.numeroRuote){
    setTimeout(() => {

        for(let ii = 0; ii < slotMachine.emojiSlotVisibili * slotMachine.numeroRuote; ii += slotMachine.numeroRuote){

            // Dopo un certo tempo, cambia il contenuto e rimuovi l'animazione
            setTimeout(() => {
                lista[ii].innerHTML = "&#" + slotMachine.tipi[Math.floor(Math.random() * slotMachine.tipi.length)] + ";";
                lista[ii].classList.remove("animazione");

                // Riabilita il bottone solo quando tutte le animazioni sono finite
                if (i === slotMachine.numeroRuote - 1) {
                    bottone.disabled = false;
                }
            }, 3500);
        }            
    }, i * 750);
}

*/