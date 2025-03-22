

function creaCalcolatrice(){
    let contenuto = "";

    contenuto += "<table id='calcolatrice'>";
    contenuto += "<tr>";

    for(let i = 0; i < operazioni.length; i++){
        if(i % 4 == 0){
            contenuto += "</tr><tr>";
        }
        contnenuto += "<td>"+operazioni[i]+"</td>";
    }

    contenuto += "</tr>";
    contenuto += "</table>";

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
    array.pop();
}

function coseno(x){
    return Math.cos(x);
}

function seno(x){
    return Math.sin(x);
}

function tangente(x){
    return Math.tan(x);
}

function arcocoseno(x){
    return Math.acos(x);
}

function arcoseno(x){
    return Math.asin(x);
}

function arcotangente(x){
    return Math.atan(x);
}

function eng(x){
    let a = 0;
    let base = 1000;
    while(x > base){
        x /= base;
        a++;
    }
    return x +"x10^(" + a + ")";
}

function percentuale(x){
    return x / 100;
}