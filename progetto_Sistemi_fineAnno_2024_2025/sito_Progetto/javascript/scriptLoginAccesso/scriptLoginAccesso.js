
// Bottone per cambiare operazione da login a accesso e viceversa
let bottoneCambiaOperazione = document.getElementById('bottoneCambiaOperazione');

// Listener del bottone per cambiare operazione
bottoneCambiaOperazione.addEventListener('click', function() {
    
    // Contenitore della operazione da fare
    daMostrare = "";
    
    // Controllo operazione da fare
    if(operazione % 2 == 0){

        // Operazione di login
        operazione++;

        // Funzione per ottenere i dati di login
        daMostrare = ottieniLogin();

        // Assegno l'operazione fatta
        document.getElementById("operazioneFatta").value = "login";

        // Rimuovo la classe per rendere statico il div
        document.getElementById("parteFinale").classList.remove("parteFinaleStatic");
    }else{

        // Operazione di accesso
        operazione--;
        
        // Funzione per ottenere i dati di accesso
        daMostrare = ottieniAccesso();

        // Assegno l'operazione fatta
        document.getElementById("operazioneFatta").value = "accesso";
        
        // Rimuovo la classe per rendere statico il div
        document.getElementById("parteFinale").classList.add("parteFinaleStatic");
    }

    // Assegno il contenuto al div
    document.getElementById("dati").innerHTML = daMostrare;
});