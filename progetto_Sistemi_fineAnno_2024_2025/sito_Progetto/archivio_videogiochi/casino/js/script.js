

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

    for (let i = 0; i < slotMachine.numeroRuote; i++) {

        setTimeout(() => {
            lista[i].classList.add("animazione");

            // Dopo un certo tempo, cambia il contenuto e rimuovi l'animazione
            setTimeout(() => {
                lista[i].innerHTML = "&#" + slotMachine.tipi[Math.floor(Math.random() * slotMachine.tipi.length)] + ";";
                lista[i].classList.remove("animazione");

                // Riabilita il bottone solo quando tutte le animazioni sono finite
                if (i === slotMachine.numeroRuote - 1) {
                    bottone.disabled = false;
                }
            }, 3500);
        }, i * 750);
    }
});