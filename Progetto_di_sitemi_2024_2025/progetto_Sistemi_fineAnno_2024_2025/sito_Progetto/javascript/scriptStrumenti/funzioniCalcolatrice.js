// Questo e' un commento

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