const grigliaGiocatore = document.getElementById('grigliaGiocatore');
const grigliaNemico = document.getElementById('grigliaNemico');
const messaggio = document.getElementById('messaggio');

const lato = 8; // 8x8
const numeroNavi = 5;

let celleGiocatore = [];
let celleNemico = [];

let naviGiocatore = [];
let naviNemico = [];

let naviGiocatoreColpite = 0;
let naviNemicoColpite = 0;

let turnoGiocatore = false;
let fasePiazzamento = true;

function creaGriglia(griglia, celleArray, cliccabile = true) {
    for (let i = 0; i < lato * lato; i++) {
        const cella = document.createElement('div');
        cella.classList.add('cella');
        cella.dataset.index = i;
        if (cliccabile) {
            cella.addEventListener('click', piazzaNave);
        }
        griglia.appendChild(cella);
        celleArray.push(cella);
    }
}

function piazzaNave(event) {
    if (!fasePiazzamento) return;
    const cella = event.target;
    const indice = parseInt(cella.dataset.index);

    if (!naviGiocatore.includes(indice)) {
        cella.classList.add('nave');
        naviGiocatore.push(indice);

        if (naviGiocatore.length === numeroNavi) {
            fasePiazzamento = false;
            messaggio.innerText = "Adesso spara al nemico!";
            avviaNemico();
            abilitaTiro();
        }
    }
}

function avviaNemico() {
    while (naviNemico.length < numeroNavi) {
        let posizione = Math.floor(Math.random() * (lato * lato));
        if (!naviNemico.includes(posizione)) {
            naviNemico.push(posizione);
        }
    }
}

function abilitaTiro() {
    celleNemico.forEach(cella => {
        cella.addEventListener('click', sparaAlNemico);
    });
    turnoGiocatore = true;
}

function sparaAlNemico(event) {
    if (!turnoGiocatore) return;

    const cella = event.target;
    const indice = parseInt(cella.dataset.index);

    if (cella.classList.contains('colpita') || cella.classList.contains('mancata')) return;

    if (naviNemico.includes(indice)) {
        cella.classList.add('colpita');
        cella.innerText = "💥";
        naviNemicoColpite++;

        if (naviNemicoColpite === numeroNavi) {
            fineGioco(true);
            return;
        }
    } else {
        cella.classList.add('mancata');
        cella.innerText = "❌";
    }

    turnoGiocatore = false;
    setTimeout(tiroComputer, 1000);
}

function tiroComputer() {
    let indice;
    do {
        indice = Math.floor(Math.random() * (lato * lato));
    } while (celleGiocatore[indice].classList.contains('colpita') || celleGiocatore[indice].classList.contains('mancata'));

    if (naviGiocatore.includes(indice)) {
        celleGiocatore[indice].classList.add('colpita');
        celleGiocatore[indice].innerText = "💥";
        naviGiocatoreColpite++;

        if (naviGiocatoreColpite === numeroNavi) {
            fineGioco(false);
            return;
        }
    } else {
        celleGiocatore[indice].classList.add('mancata');
        celleGiocatore[indice].innerText = "❌";
    }

    turnoGiocatore = true;
}

function fineGioco(vittoria) {
    turnoGiocatore = false;
    messaggio.innerText = vittoria ? "🏆 Hai vinto!" : "💀 Hai perso!";
    creaBottoneRigioca();
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

creaGriglia(grigliaGiocatore, celleGiocatore, true);
creaGriglia(grigliaNemico, celleNemico, false);
