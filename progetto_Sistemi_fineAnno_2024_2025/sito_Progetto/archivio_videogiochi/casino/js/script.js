

let slot = "";

slot += creaListaSlot();

document.getElementById("listaCarteSlot").innerHTML = slot;

slot = "";

slot += creaSlotMachine();

document.getElementById("slotMachine").innerHTML = slot;

let lista = document.getElementsByClassName("slotSlotMachine");

let bottone = document.getElementById("bottoneSlotSlot");

bottone.addEventListener("click", function () {

    avviaSlotPerTempoTotale(lista, bottone, 6000, 750, 3500);

    document.getElementById("risultato").innerHTML = calcolaVincita(lista);
});
