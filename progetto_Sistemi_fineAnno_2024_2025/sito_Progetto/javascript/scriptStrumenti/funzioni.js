

function creaCalcolatrice(pulsanti){
    let contenuto = "";


    return contenuto;
}

function risultatoCalcolatrice(dati){
    let contenuto = "";

    contenuto += risultato(dati);

    return contenuto;
}

// Funzione per il calcolo del risultato della operazione
function risultato(dati, operazioni){
    // Non ci sono operazioni da fare
    if(dati.length = 0){
        return "";
    }

    // Controllo Errori
    if(controlloErrori(dati, operazioni) == true){
        return "Math Error: Operazione non valida!";
    }

    // Ci sono operazioni che si possono fare



    // Calcolo il risultato
    // Variaabile che conterra' il risultato

    
}

// Funzione per il controllo degli errori
function controlloErrori(dati, operazioni){

    // Dati accettabili
    return false;
}

// Funzione per il calcolo della somma
function somma(a, b){
    return a + b;
}

// Funzione per il calcolo della sottrazione
function sottrazione(a, b){
    return a - b;
}

// Funzione per il calcolo della moltiplicazione
function moltiplicazione(a, b){
    return a * b;
}

// Funzione per il calcolo della divisione
function divisione(a, b){
    if(b === 0){
        return "Math Error: Divisione per zero!";
    }
    if(a == 0 && b === 0){
        return "Math Error: Indeterminato!";
    }
    return a / b;
}

// Funzione per il calcolo della potenza
function potenza(a, b){
    return Math.pow(a, b);
}

// Funzione per il calcolo della radice quadrata
function radiceQuadrada(a){
    return Math.sqrt(a);
}