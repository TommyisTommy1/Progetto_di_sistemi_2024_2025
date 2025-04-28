const griglia = document.getElementById('grigliaGioco');
const lato = 4;
let celle = [];

function creaGriglia() {
    for (let i = 0; i < lato * lato; i++) {
        const cella = document.createElement('div');
        cella.classList.add('cella');
        cella.setAttribute('data-valore', "0");
        cella.innerText = "";
        griglia.appendChild(cella);
        celle.push(cella);
    }
    generaNuovoNumero();
    generaNuovoNumero();
}

function aggiornaColori() {
    celle.forEach(cella => {
        let valore = parseInt(cella.getAttribute('data-valore'));
        cella.className = 'cella';
        cella.setAttribute('data-valore', valore);
        cella.innerText = valore === 0 ? "" : valore;
    });
}

function generaNuovoNumero() {
    let vuoti = celle.filter(cella => cella.getAttribute('data-valore') == 0);
    if (vuoti.length > 0) {
        let randomCella = vuoti[Math.floor(Math.random() * vuoti.length)];
        randomCella.setAttribute('data-valore', Math.random() < 0.9 ? "2" : "4");
        aggiornaColori();
    } else {
        controllaFineGioco();
    }
}

function sposta(tasto) {
    let matrice = [];
    for (let r = 0; r < lato; r++) {
        let riga = [];
        for (let c = 0; c < lato; c++) {
            if (tasto === 'ArrowLeft' || tasto === 'ArrowRight') {
                riga.push(parseInt(celle[r * lato + c].getAttribute('data-valore')));
            } else {
                riga.push(parseInt(celle[c * lato + r].getAttribute('data-valore')));
            }
        }
        matrice.push(riga);
    }

    if (tasto === 'ArrowRight' || tasto === 'ArrowDown') {
        matrice = matrice.map(riga => riga.reverse());
    }

    let cambiato = false;
    matrice = matrice.map(riga => {
        let senzaZero = riga.filter(val => val !== 0);
        for (let i = 0; i < senzaZero.length - 1; i++) {
            if (senzaZero[i] === senzaZero[i + 1]) {
                senzaZero[i] *= 2;
                senzaZero[i + 1] = 0;
            }
        }
        let nuova = senzaZero.filter(val => val !== 0);
        while (nuova.length < lato) nuova.push(0);
        if (JSON.stringify(nuova) !== JSON.stringify(riga)) cambiato = true;
        return nuova;
    });

    if (tasto === 'ArrowRight' || tasto === 'ArrowDown') {
        matrice = matrice.map(riga => riga.reverse());
    }

    for (let r = 0; r < lato; r++) {
        for (let c = 0; c < lato; c++) {
            if (tasto === 'ArrowLeft' || tasto === 'ArrowRight') {
                celle[r * lato + c].setAttribute('data-valore', matrice[r][c]);
            } else {
                celle[c * lato + r].setAttribute('data-valore', matrice[r][c]);
            }
        }
    }

    if (cambiato) {
        generaNuovoNumero();
    }
    aggiornaColori();
}

function controllaFineGioco() {
    if (!celle.some(cella => cella.getAttribute('data-valore') == 0)) {
        document.getElementById('parteFinale').innerHTML = "😞 Game Over!";
        creaBottoneRigioca();
    }
}

function creaBottoneRigioca() {
    const bottone = document.createElement("button");
    bottone.innerText = "Rigioca";
    bottone.className = "bottone-rigioca";
    bottone.onclick = function() {
        location.reload();
    };
    document.getElementById("parteFinale").appendChild(bottone);
}

document.addEventListener('keydown', function(event) {
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
        sposta(event.key);
    }
});

creaGriglia();
