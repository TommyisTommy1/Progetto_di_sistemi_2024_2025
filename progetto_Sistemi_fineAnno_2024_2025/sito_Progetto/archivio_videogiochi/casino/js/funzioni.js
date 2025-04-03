

function creaListaSlot(){
    let lista = "";

    lista += "<ul>";

    for(let i = 0; i < slotMachine.tipi.length; i++) {
        lista += "<li> &#" + slotMachine.tipi[i] + "; </li>";
    }

    lista += "</ul>";

    return lista;
}


function creaSlotMachine(){
    let machine = "";

    machine += "<table class='slot'>"
    
    machine += "<tr>";
    machine += "<th>" + slotMachine.nome + "</th>";
    machine += "</tr>";

    for (let i = 0; i < slotMachine.emojiSlotVisibili; i++){

        machine += "<tr";

        if(i == (((slotMachine.emojiSlotVisibili % 2 == 0)? slotMachine.emojiSlotVisibili : slotMachine.emojiSlotVisibili + 1) / 2) - 1){
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
