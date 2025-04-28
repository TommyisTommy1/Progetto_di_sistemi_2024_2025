// Lista di parole
const parole = ["computer", "programmazione", "javascript", "html", "css", "sviluppo", "internet"];
let parolaSelezionata = parole[Math.floor(Math.random() * parole.length)];
let parolaNascosta = Array(parolaSelezionata.length).fill("_");
let tentativi = 6;
let lettereSbagliate = [];

document.getElementById("parolaNascosta").innerText = parolaNascosta.join(" ");
document.getElementById("tentativiRestanti").innerText = "Tentativi rimasti: " + tentativi;

// Funzione per controllare la lettera
function indovinaLettera() {
    let lettera = document.getElementById("letteraInput").value.toLowerCase();
    document.getElementById("letteraInput").value = "";

    if (lettera.length !== 1 || !lettera.match(/[a-z]/i)) {
        alert("Inserisci una sola lettera valida!");
        return;
    }

    let trovato = false;
    for (let i = 0; i < parolaSelezionata.length; i++) {
        if (parolaSelezionata[i] === lettera) {
            parolaNascosta[i] = lettera;
            trovato = true;
        }
    }

    if (!trovato) {
        if (!lettereSbagliate.includes(lettera)) {
            tentativi--;
            lettereSbagliate.push(lettera);
        }
    }

    document.getElementById("parolaNascosta").innerText = parolaNascosta.join(" ");
    document.getElementById("tentativiRestanti").innerText = "Tentativi rimasti: " + tentativi;
    document.getElementById("lettereSbagliate").innerText = "Lettere sbagliate: " + lettereSbagliate.join(", ");

    controllaFineGioco();
}

function controllaFineGioco() {
    if (!parolaNascosta.includes("_")) {
        document.getElementById("parteFinale").innerHTML = "🎉 Complimenti! Hai indovinato la parola!";
        creaBottoneRigioca();
    } else if (tentativi === 0) {
        document.getElementById("parteFinale").innerHTML = "😞 Hai perso! La parola era: " + parolaSelezionata;
        creaBottoneRigioca();
    }
}

// Crea dinamicamente il bottone Rigioca
function creaBottoneRigioca() {
    const bottone = document.createElement("button");
    bottone.innerText = "Rigioca";
    bottone.className = "bottone-rigioca";
    bottone.onclick = function() {
        location.reload();
    };
    document.getElementById("parteFinale").appendChild(bottone);
    document.getElementById("letteraInput").disabled = true;
}


