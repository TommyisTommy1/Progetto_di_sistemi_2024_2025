

function creaCalcolatrice(){
    let contenuto = "";

    return contenuto;
}

function risultatoCalcolatrice(){
    let contenuto = "";

    contenuto += risultato();

    return contenuto;
}

// Funzione per il calcolo del risultato della operazione
function risultato(){
    // Non ci sono operazioni da fare
    if(dati.length = 0){
        return "";
    }

    // Controllo Errori
    if(controlloErrori() == true){
        return "Math Error: Operazione non valida!";
    }

    // Ci sono operazioni che si possono fare



    // Calcolo il risultato
    // Variaabile che conterra' il risultato


}

// Funzione per il controllo degli errori
function controlloErrori(){

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
function potenza(a, x){
    return Math.pow(a, x);
}

// Funzione per il calcolo della radice quadrata
function radiceQuadrada(x){
    return Math.sqrt(x);
}

// Funzione per il calcolo del logaritmo
function logaritmo(a, x){
    return Math.log(x)/Math.log(a);
}

function piGreco(){
    return Math.PI;
}

function costanteEulero(){
    return Math.E;
}

function cambioSegno(a){
    return -a;
}

function cancellaUltimo(array){
    array2 = array;
    return array2;
}