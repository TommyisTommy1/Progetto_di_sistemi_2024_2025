

function creaListaSlot(){
    let lista = "";

    lista += "<ul>";

    for(let i = 0; i < slotMachine.tipi.length; i++) {
        lista += "<li> &#" + slotMachine.tipi[i] + "; </li>";
    }

    lista += "</ul>";

    return lista;
}

function sceltaCentro(){
    return (((slotMachine.emojiSlotVisibili % 2 == 0)? slotMachine.emojiSlotVisibili : slotMachine.emojiSlotVisibili + 1) / 2) - 1;
}

function creaSlotMachine(){
    let machine = "";

    machine += "<table class='slot'>"
    
    machine += "<tr>";
    machine += "<th>" + slotMachine.nome + "</th>";
    machine += "</tr>";

    for (let i = 0; i < slotMachine.emojiSlotVisibili; i++){

        machine += "<tr";

        if(i == sceltaCentro()){
            machine += " class='slotCentrale' ";
        }

        machine += ">";

        for (let j = 0; j < slotMachine.numeroRuote; j++){

            machine += "<td class='slotSlotMachine'> &#" + slotMachine.tipi[Math.floor(Math.random() * slotMachine.tipi.length)] + "; </td>";
        }

        machine += "</tr>";
    }

    machine += "</table>";
    
    machine += "<button type='button' id='bottoneSlotSlot' class='bottoneSlotSlot'>Clicca per girare la slot</button>";

    return machine;
}


// 🔁 Aggiunge animazione alla colonna i
function aggiungiAnimazione(lista, colonna) {

    for (let i = 0; i < slotMachine.emojiSlotVisibili; i++) {
        lista[colonna + i * slotMachine.numeroRuote].classList.add("animazione");
    }
}

// 🔁 Rimuove animazione dalla colonna i
function rimuoviAnimazione(lista, colonna) {

    for (let i = 0; i < slotMachine.emojiSlotVisibili; i++) {
        lista[colonna + i * slotMachine.numeroRuote].classList.remove("animazione");
    }
}

// 🔄 Cambia le emoji di tutte le colonne, facendo "scendere" le emoji
function aggiornaContenutoSlot(lista) {

    for (let i = 0; i < slotMachine.numeroRuote * slotMachine.emojiSlotVisibili; i++) {

        // Sposta le emoji verso il basso
        for(let ii = slotMachine.numeroRuote * slotMachine.emojiSlotVisibili; ii > slotMachine.numeroRuote; ii -= slotMachine.numeroRuote){
            lista[ii] = lista[ii -= slotMachine.numeroRuote];
        }

        // Nuova emoji random nella prima riga (in alto)
        lista[i].innerHTML = "&#" + slotMachine.tipi[Math.floor(Math.random() * slotMachine.tipi.length)] + ";";
    }
}

// 🌀 Gestisce un giro per una colonna specifica
function giraColonna(lista, colonna, delayInizio, durataAnimazione) {

    setTimeout(() => {

        aggiungiAnimazione(lista, colonna);

        aggiornaContenutoSlot(lista);

        setTimeout(() => {

            rimuoviAnimazione(lista, colonna);

        }, durataAnimazione);

    }, delayInizio);
}

function avviaSlot(lista, delayRuote, durataAnimazione) {

    for (let i = 0; i < slotMachine.numeroRuote; i++) {

        giraColonna(lista, i, i * delayRuote, durataAnimazione);
    }
}

function avviaSlotPerTempoTotale(lista, bottone, durataTotale, intervalloGiro, durataAnimazione) {
    bottone.disabled = true;

    const inizio = Date.now();

    const intervallo = setInterval(() => {
        const tempoTrascorso = Date.now() - inizio;

        if (tempoTrascorso >= durataTotale) {
            clearInterval(intervallo);

            // Attendi che l'ultima animazione finisca, poi riabilita il bottone
            setTimeout(() => {
                
                bottone.disabled = false;
            }, durataAnimazione + 100);

        } else {

            avviaSlot(lista, intervalloGiro, durataAnimazione);
        }
    }, intervalloGiro);
}

function calcolaVincita(lista) {
    const centro = sceltaCentro(); // riga centrale
    const simboloVincente = lista[centro * slotMachine.numeroRuote].innerHTML;

    for (let i = 1; i < slotMachine.numeroRuote; i++) {
        const indice = centro * slotMachine.numeroRuote + i;

        if (lista[indice].innerHTML !== simboloVincente) {
            return "Non hai vinto";
        }
    }

    return "Hai vinto!";
}