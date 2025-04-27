// -----------------------
// Modale Tutorial
// -----------------------
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.onclick = () => modal.style.display = "block";
closeModalBtn.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };

// -----------------------
// Dati piloti
// -----------------------
const datiPiloti = {
  "2018": [
  { nome: "Lewis Hamilton", numero: 44, team: "Mercedes", nazionalità: "Regno Unito", vittorie: 71, mondiali: 4, teamPrecedenti: ["McLaren"] },
  { nome: "Sebastian Vettel", numero: 5, team: "Ferrari", nazionalità: "Germania", vittorie: 52, mondiali: 4, teamPrecedenti: ["BMW Sauber", "Toro Rosso", "Red Bull Racing"] },
  { nome: "Kimi Räikkönen", numero: 7, team: "Ferrari", nazionalità: "Finlandia", vittorie: 20, mondiali: 1, teamPrecedenti: ["Sauber", "McLaren", "Ferrari", "Lotus"] },
  { nome: "Max Verstappen", numero: 33, team: "Red Bull Racing", nazionalità: "Paesi Bassi", vittorie: 2, mondiali: 0, teamPrecedenti: ["Toro Rosso"] },
  { nome: "Daniel Ricciardo", numero: 3, team: "Red Bull Racing", nazionalità: "Australia", vittorie: 7, mondiali: 0, teamPrecedenti: ["HRT", "Toro Rosso"] },
  { nome: "Charles Leclerc", numero: 16, team: "Alfa Romeo", nazionalità: "Monaco", vittorie: 0, mondiali: 0, teamPrecedenti: [] },
  { nome: "Valtteri Bottas", numero: 77, team: "Mercedes", nazionalità: "Finlandia", vittorie: 10, mondiali: 0, teamPrecedenti: ["Williams"] },
  { nome: "Lance Stroll", numero: 18, team: "Aston Martin", nazionalità: "Canada", vittorie: 0, mondiali: 0, teamPrecedenti: [] },
  { nome: "Pierre Gasly", numero: 10, team: "Toro Rosso", nazionalità: "Francia", vittorie: 0, mondiali: 0, teamPrecedenti: [] },
],

  "2022": [
  { nome: "Max Verstappen", numero: 1, team: "Red Bull Racing", nazionalità: "Paesi Bassi", vittorie: 19, mondiali: 2, teamPrecedenti: ["Toro Rosso"] },
  { nome: "Charles Leclerc", numero: 16, team: "Ferrari", nazionalità: "Monaco", vittorie: 2, mondiali: 0, teamPrecedenti: ["Alfa Romeo"] },
  { nome: "George Russell", numero: 63, team: "Mercedes", nazionalità: "Regno Unito", vittorie: 0, mondiali: 0, teamPrecedenti: ["Williams"] },
  { nome: "Lewis Hamilton", numero: 44, team: "Mercedes", nazionalità: "Regno Unito", vittorie: 0, mondiali: 7, teamPrecedenti: ["McLaren"] },
  { nome: "Sergio Pérez", numero: 11, team: "Red Bull Racing", nazionalità: "Messico", vittorie: 2, mondiali: 0, teamPrecedenti: ["Sauber", "McLaren", "Force India", "Racing Point"] },
  { nome: "Carlos Sainz", numero: 55, team: "Ferrari", nazionalità: "Spagna", vittorie: 0, mondiali: 0, teamPrecedenti: ["Toro Rosso", "Renault", "McLaren"] },
  { nome: "Lando Norris", numero: 4, team: "McLaren", nazionalità: "Regno Unito", vittorie: 0, mondiali: 0, teamPrecedenti: [] },
  { nome: "Esteban Ocon", numero: 31, team: "Alpine", nazionalità: "Francia", vittorie: 1, mondiali: 0, teamPrecedenti: ["Force India", "Racing Point"] },
  { nome: "Fernando Alonso", numero: 14, team: "Alpine", nazionalità: "Spagna", vittorie: 32, mondiali: 2, teamPrecedenti: ["Renault", "Ferrari", "McLaren"] },
  { nome: "Valtteri Bottas", numero: 77, team: "Alfa Romeo", nazionalità: "Finlandia", vittorie: 10, mondiali: 0, teamPrecedenti: ["Mercedes"] },
  { nome: "Sebastian Vettel", numero: 5, team: "Aston Martin", nazionalità: "Germania", vittorie: 54, mondiali: 4, teamPrecedenti: ["BMW Sauber", "Toro Rosso", "Red Bull", "Ferrari"] },
  { nome: "Daniel Ricciardo", numero: 3, team: "McLaren", nazionalità: "Australia", vittorie: 8, mondiali: 0, teamPrecedenti: ["HRT", "Toro Rosso", "Red Bull", "Renault"] },
  { nome: "Pierre Gasly", numero: 10, team: "AlphaTauri", nazionalità: "Francia", vittorie: 1, mondiali: 0, teamPrecedenti: ["Red Bull"] },
  { nome: "Kevin Magnussen", numero: 20, team: "Haas", nazionalità: "Danimarca", vittorie: 0, mondiali: 0, teamPrecedenti: [] },
  { nome: "Lance Stroll", numero: 18, team: "Aston Martin", nazionalità: "Canada", vittorie: 0, mondiali: 0, teamPrecedenti: [] },
  { nome: "Mick Schumacher", numero: 47, team: "Haas", nazionalità: "Germania", vittorie: 0, mondiali: 0, teamPrecedenti: [] },
  { nome: "Yuki Tsunoda", numero: 22, team: "AlphaTauri", nazionalità: "Giappone", vittorie: 0, mondiali: 0, teamPrecedenti: [] },
  { nome: "Zhou Guanyu", numero: 24, team: "Alfa Romeo", nazionalità: "Cina", vittorie: 0, mondiali: 0, teamPrecedenti: [] },
  { nome: "Alexander Albon", numero: 23, team: "Williams", nazionalità: "Thailandia", vittorie: 0, mondiali: 0, teamPrecedenti: ["Red Bull"] },
  { nome: "Nicholas Latifi", numero: 6, team: "Williams", nazionalità: "Canada", vittorie: 0, mondiali: 0, teamPrecedenti: [] },
  { nome: "Nyck de Vries", numero: 45, team: "Williams", nazionalità: "Paesi Bassi", vittorie: 0, mondiali: 0, teamPrecedenti: [] }
],

  "2024": [
  { nome: "Max Verstappen",    numero: 1,  team: "Red Bull Racing",      nazionalità: "Paesi Bassi", vittorie: 55,  mondiali: 3, teamPrecedenti: ["Toro Rosso"] },
  { nome: "Sergio Pérez",      numero: 11, team: "Red Bull Racing",      nazionalità: "Messico",      vittorie: 6,   mondiali: 0, teamPrecedenti: [] },
  { nome: "Lewis Hamilton",    numero: 44, team: "Mercedes",            nazionalità: "Regno Unito",  vittorie: 103, mondiali: 7, teamPrecedenti: ["McLaren"] },
  { nome: "George Russell",    numero: 63, team: "Mercedes",            nazionalità: "Regno Unito",  vittorie: 1,   mondiali: 0, teamPrecedenti: [] },
  { nome: "Charles Leclerc",   numero: 16, team: "Ferrari",             nazionalità: "Monaco",        vittorie: 5,   mondiali: 0, teamPrecedenti: ["Alfa Romeo"] },
  { nome: "Carlos Sainz Jr.",  numero: 55, team: "Ferrari",             nazionalità: "Spagna",        vittorie: 3,   mondiali: 0, teamPrecedenti: ["McLaren"] },
  { nome: "Lando Norris",      numero: 4,  team: "McLaren",             nazionalità: "Regno Unito",  vittorie: 0,   mondiali: 0, teamPrecedenti: [] },
  { nome: "Oscar Piastri",     numero: 81, team: "McLaren",             nazionalità: "Australia",     vittorie: 0,   mondiali: 0, teamPrecedenti: [] },
  { nome: "Fernando Alonso",   numero: 14, team: "Aston Martin",        nazionalità: "Spagna",        vittorie: 32,  mondiali: 2, teamPrecedenti: ["Renault","Ferrari","McLaren","Alpine"] },
  { nome: "Lance Stroll",      numero: 18, team: "Aston Martin",        nazionalità: "Canada",        vittorie: 1,   mondiali: 0, teamPrecedenti: [] },
  { nome: "Pierre Gasly",      numero: 10, team: "Alpine",              nazionalità: "Francia",       vittorie: 1,   mondiali: 0, teamPrecedenti: ["Toro Rosso"] },
  { nome: "Esteban Ocon",      numero: 31, team: "Alpine",              nazionalità: "Francia",       vittorie: 1,   mondiali: 0, teamPrecedenti: [] },
  { nome: "Kevin Magnussen",   numero: 20, team: "Haas",                nazionalità: "Danimarca",     vittorie: 0,   mondiali: 0, teamPrecedenti: [] },
  { nome: "Nico Hülkenberg",   numero: 27, team: "Haas",                nazionalità: "Germania",      vittorie: 0,   mondiali: 0, teamPrecedenti: [] },
  { nome: "Yuki Tsunoda",      numero: 22, team: "AlphaTauri",          nazionalità: "Giappone",      vittorie: 0,   mondiali: 0, teamPrecedenti: [] },
  { nome: "Daniel Ricciardo",  numero: 3,  team: "AlphaTauri",          nazionalità: "Australia",     vittorie: 8,   mondiali: 0, teamPrecedenti: ["HRT","Toro Rosso","Red Bull","Renault","McLaren"] },
  { nome: "Valtteri Bottas",   numero: 77, team: "Sauber",              nazionalità: "Finlandia",     vittorie: 10,  mondiali: 0, teamPrecedenti: ["Williams","Mercedes"] },
  { nome: "Zhou Guanyu",       numero: 24, team: "Sauber",              nazionalità: "Cina",          vittorie: 0,   mondiali: 0, teamPrecedenti: [] },
  { nome: "Alexander Albon",   numero: 23, team: "Williams",            nazionalità: "Thailandia",    vittorie: 0,   mondiali: 0, teamPrecedenti: ["Toro Rosso","Red Bull"] },
  { nome: "Logan Sargeant",    numero: 2,  team: "Williams",            nazionalità: "Stati Uniti", vittorie: 0,   mondiali: 0, teamPrecedenti: [] }
]

};

// -----------------------
// Frasi di vittoria
// -----------------------
const frasiVittoria = [
  "Get in there!",
  "Ma come mi fai sognare!",
  "Du bist weltmeister!",
  "Bwoah!",
  "Il predestinato vince!",
  "Simply lovely!"
];

// -----------------------
// Stato di gioco
// -----------------------
let pilotaDaIndovinare = null;
let tentativi = 5;
let giocoTerminato = false;

// utilità per normalizzare stringhe (rimuove accenti)
function normalize(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// -----------------------
// Avvia partita
// -----------------------
function avviaGioco() {
  // mostra elementi
  document.getElementById("tabellaGioco").style.display = "table";
  document.getElementById("nomePilota").style.display = "inline-block";
  document.getElementById("controllaBtn").style.display = "inline-block";

  const stagione = document.getElementById("stagioneSelect").value;
  const piloti = datiPiloti[stagione];
  const tbody = document.querySelector("#tabellaGioco tbody");

  // reset stato
  pilotaDaIndovinare = null;
  tentativi = 5;
  giocoTerminato = false;
  document.getElementById("nomePilota").value = "";

  // ricrea 5 righe vuote
  tbody.innerHTML = Array(5).fill(
    "<tr><td></td><td></td><td></td><td></td><td></td></tr>"
  ).join("");

  if (!piloti?.length) {
    alert("Nessun dato disponibile per questa stagione.");
    return;
  }

  pilotaDaIndovinare = piloti[Math.floor(Math.random() * piloti.length)];
  console.log("Pilota da indovinare:", pilotaDaIndovinare.nome);

  document.getElementById("controllaBtn").disabled = false;
}

// -----------------------
// Suggerimenti dinamici
// -----------------------
function mostraSuggerimenti() {
  if (giocoTerminato) return;
  const stagione = document.getElementById("stagioneSelect").value;
  const piloti = datiPiloti[stagione];
  const inputRaw = document.getElementById("nomePilota").value;
  const input = normalize(inputRaw);
  const div = document.getElementById("suggerimenti");

  if (!input) {
    div.innerHTML = "";
    return;
  }

  const filtrati = piloti.filter(p => normalize(p.nome).includes(input));
  if (!filtrati.length) {
    div.innerHTML = "";
    return;
  }

  div.innerHTML = "<ul>" + filtrati.map(p =>
    `<li onclick="selezionaSuggerimento('${p.nome}')">${p.nome}</li>`
  ).join("") + "</ul>";
}

// -----------------------
// Seleziona suggerimento
// -----------------------
function selezionaSuggerimento(nome) {
  const inp = document.getElementById("nomePilota");
  inp.value = nome;
  document.getElementById("suggerimenti").innerHTML = "";
}

// -----------------------
// Controlla risposta
// -----------------------
function controllaRisposta() {
  if (giocoTerminato) return;

  const input = normalize(document.getElementById("nomePilota").value);
  const stagione = document.getElementById("stagioneSelect").value;
  const piloti = datiPiloti[stagione];
  const tent = piloti.find(p => normalize(p.nome) === input);
  if (!tent) return;

  // verifica duplicato
  const righe = Array.from(document.querySelectorAll("#tabellaGioco tbody tr"));
  const dup = righe.some(r => normalize(r.cells[0].textContent) === input);
  if (dup) {
    document.getElementById("esitoGioco").textContent = "Questo pilota è già stato inserito.";
    return;
  }

  aggiungiTentativoATabella(tent, pilotaDaIndovinare);

  if (tent.nome === pilotaDaIndovinare.nome) {
    const frase = frasiVittoria[Math.floor(Math.random() * frasiVittoria.length)];
    document.getElementById("esitoGioco").innerHTML =
      `<span class="vittoria">${frase}🎉<br>Il pilota è ${tent.nome}!</span>`;
    fineGioco();
  } else {
    tentativi--;
    if (tentativi === 0) {
      document.getElementById("esitoGioco").textContent =
        `❌ Tentativi finiti! Era ${pilotaDaIndovinare.nome}.`;
      fineGioco();
    }
  }
}

// -----------------------
// Termina gioco
// -----------------------
function fineGioco() {
  giocoTerminato = true;
  document.getElementById("nomePilota").disabled = true;
  const btn = document.getElementById("controllaBtn");
  btn.disabled = true;
  btn.style.display = "none";
}

// -----------------------
// Inserisci dati in tabella
// -----------------------
function aggiungiTentativoATabella(tentativo, corretto) {
  const righe = Array.from(document.querySelectorAll("#tabellaGioco tbody tr"));
  const rigaLibera = righe.find(r => !r.cells[0].textContent);
  if (!rigaLibera) return;

  const v = typeof tentativo.vittorie === "number" ? tentativo.vittorie : 0;
  const m = typeof tentativo.mondiali === "number" ? tentativo.mondiali : 0;
  const dati = [tentativo.nome, tentativo.numero, tentativo.team, v, m];

  dati.forEach((val, i) => rigaLibera.cells[i].textContent = val);

  rigaLibera.cells[0].style.backgroundColor = tentativo.nome === corretto.nome ? "green" : "";
  rigaLibera.cells[1].style.backgroundColor = coloraNumero(tentativo.numero, corretto.numero);
  rigaLibera.cells[2].style.backgroundColor = coloraTeam(tentativo.team, corretto.team, corretto.teamPrecedenti);
  rigaLibera.cells[3].style.backgroundColor = coloraNumero(v, corretto.vittorie);
  rigaLibera.cells[4].style.backgroundColor = coloraNumero(m, corretto.mondiali);

  rigaLibera.classList.add("fade-in");
}

// -----------------------
// Helper coloring
// -----------------------
function coloraNumero(a, b) {
  if (typeof a !== "number" || typeof b !== "number") return "";
  if (a === b) return "green";
  return a < b ? "orange" : "purple";
}

function coloraTeam(t, corretto, precedenti = []) {
  if (t === corretto) return "green";
  if (precedenti.includes(t)) return "orange";
  return "red";
}
