

let slot = "";

slot += creaListaSlot();

document.getElementById("listaCarteSlot").innerHTML = slot;

slot = "";

slot += creaSlotMachine();

document.getElementById("slotMachine").innerHTML = slot;


let bottone = document.getElementById("bottoneSlotSlot");

bottone.addEventListener("click", function () {
    
    document.getElementById("risultato").innerHTML = "In attesa di risultato...";
    
    let lista = document.getElementsByClassName("slotSlotMachine");
    
    let tempo = 6000;
    avviaSlotPerTempoTotale(lista, bottone, tempo, 750, 3500);

    setTimeout(() => {
        
        document.getElementById("risultato").innerHTML = calcolaVincita(lista);
    }, tempo + 3000);
});
