// Ottieni gli elementi della finestra modale e i pulsanti
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

// Quando clicchi sul pulsante, la finestra modale si apre
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

// Quando clicchi sulla "x" per chiudere, la finestra modale si chiude
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

// Quando clicchi fuori dalla finestra modale, essa si chiude
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const datiPiloti = {
    "2018": [
      { nome: "Lewis Hamilton", numero: 44, team: "Mercedes", nazionalità: "Regno Unito" },
      { nome: "Sebastian Vettel", numero: 5, team: "Ferrari", nazionalità: "Germania" },
      { nome: "Kimi Räikkönen", numero: 7, team: "Ferrari", nazionalità: "Finlandia" },
      { nome: "Max Verstappen", numero: 33, team: "Red Bull Racing", nazionalità: "Paesi Bassi" },
      { nome: "Daniel Ricciardo", numero: 3, team: "Red Bull Racing", nazionalità: "Australia" }
      // Puoi aggiungere gli altri...
    ],
    "2022": [
      { nome: "Max Verstappen", numero: 1, team: "Red Bull Racing", nazionalità: "Paesi Bassi" },
      { nome: "Charles Leclerc", numero: 16, team: "Ferrari", nazionalità: "Monaco" },
      { nome: "George Russell", numero: 63, team: "Mercedes", nazionalità: "Regno Unito" },
      { nome: "Lewis Hamilton", numero: 44, team: "Mercedes", nazionalità: "Regno Unito" }
      // Continua con gli altri...
    ],
    "2024": [
          {
            nome: "Max Verstappen",
            numero: 1,
            team: "Red Bull Racing",
            nazionalità: "Paesi Bassi",
            vittorie: 55,
            mondiali: 3,
            teamPrecedenti: ["Toro Rosso"]
          },
          {
            nome: "Lewis Hamilton",
            numero: 44,
            team: "Mercedes",
            nazionalità: "Regno Unito",
            vittorie: 103,
            mondiali: 7,
            teamPrecedenti: ["McLaren"]
          },
          {
            nome: "Charles Leclerc",
            numero: 16,
            team: "Ferrari",
            nazionalità: "Monaco",
            vittorie: 5,
            mondiali: 0,
            teamPrecedenti: ["Alfa Romeo"]
          },
          {
            nome: "Fernando Alonso",
            numero: 14,
            team: "Aston Martin",
            nazionalità: "Spagna",
            vittorie: 32,
            mondiali: 2,
            teamPrecedenti: ["Renault", "Ferrari", "McLaren", "Alpine"]
          }
        ]
      };
  
  let pilotaDaIndovinare = null; // Questo è il pilota scelto casualmente

  function avviaGioco() {
    const stagione = document.getElementById("stagioneSelect").value;
    const piloti = datiPiloti[stagione];
    const listaDiv = document.getElementById("pilotiLista");
    const esito = document.getElementById("esitoGioco");
  
    if (!piloti || piloti.length === 0) {
      listaDiv.innerHTML = "<p>Nessun dato disponibile per questa stagione.</p>";
      return;
    }
  
    // Scegli un pilota randomico
    pilotaDaIndovinare = piloti[Math.floor(Math.random() * piloti.length)];
    console.log("Pilota da indovinare:", pilotaDaIndovinare.nome); // debug
  
    // Reset messaggi e input
    esito.textContent = "";
    document.getElementById("nomePilota").value = "";
  
    // (Opzionale) mostra la lista dei piloti
    let html = `<h3>Piloti Stagione ${stagione}</h3><ul>`;
    piloti.forEach(pilota => {
      html += `<li>${pilota.nome}</li>`;
    });
    html += `</ul>`;
    listaDiv.innerHTML = html;
  }

  function mostraSuggerimenti() {
    const stagione = document.getElementById("stagioneSelect").value;
    const piloti = datiPiloti[stagione];
    const input = document.getElementById("nomePilota").value.toLowerCase();
    const suggerimentiDiv = document.getElementById("suggerimenti");
  
    if (!input) {
      suggerimentiDiv.innerHTML = "";
      return;
    }
  
    const filtrati = piloti.filter(p => p.nome.toLowerCase().includes(input));
  
    if (filtrati.length === 0) {
      suggerimentiDiv.innerHTML = "";
      return;
    }
  
    let ul = "<ul>";
    filtrati.forEach(p => {
      ul += `<li onclick="selezionaSuggerimento('${p.nome}')">${p.nome}</li>`;
    });
    ul += "</ul>";
    suggerimentiDiv.innerHTML = ul;
  }
  
  function selezionaSuggerimento(nome) {
    document.getElementById("nomePilota").value = nome;
    document.getElementById("suggerimenti").innerHTML = "";
  }
  
  
  function controllaRisposta() {
    const stagione = document.getElementById("stagioneSelect").value;
    const input = document.getElementById("nomePilota").value.trim().toLowerCase();
    const piloti = datiPiloti[stagione];
    const esito = document.getElementById("esitoGioco");
  
    const pilotaTentativo = piloti.find(p => p.nome.toLowerCase() === input);
  
    if (!pilotaDaIndovinare) {
      esito.textContent = "Avvia prima il gioco!";
      esito.style.color = "orange";
      return;
    }
  
    if (!pilotaTentativo) {
      esito.textContent = "Pilota non trovato!";
      esito.style.color = "red";
      return;
    }
  
    esito.textContent = "";
    aggiungiTentativoATabella(pilotaTentativo, pilotaDaIndovinare);
  }
  
  function aggiungiTentativoATabella(tentativo, corretto) {
    const tbody = document.querySelector("#tabellaGioco tbody");
    const riga = document.createElement("tr");
  
    // NOME
    riga.appendChild(creaCella(tentativo.nome, tentativo.nome === corretto.nome ? "green" : ""));
  
    // NUMERO
    riga.appendChild(creaCella(
      tentativo.numero,
      coloraNumero(tentativo.numero, corretto.numero)
    ));
  
    // TEAM
    riga.appendChild(creaCella(
      tentativo.team,
      coloraTeam(tentativo.team, corretto.team, corretto.teamPrecedenti)
    ));
  
    // VITTORIE
    riga.appendChild(creaCella(
      tentativo.vittorie,
      coloraNumero(tentativo.vittorie, corretto.vittorie)
    ));
  
    // MONDIALI
    riga.appendChild(creaCella(
      tentativo.mondiali,
      coloraNumero(tentativo.mondiali, corretto.mondiali)
    ));
  
    tbody.appendChild(riga);
  }
  
  function creaCella(valore, colore) {
    const cell = document.createElement("td");
    cell.textContent = valore;
    if (colore) {
      cell.style.backgroundColor = colore;
      cell.style.color = "white";
    }
    return cell;
  }
  
  function coloraNumero(tuoNumero, correttoNumero) {
    if (tuoNumero === correttoNumero) return "green";
    if (tuoNumero < correttoNumero) return "yellow";
    if (tuoNumero > correttoNumero) return "purple";
  }
  
  function coloraTeam(tuoTeam, teamCorretto, teamPrecedenti) {
    if (tuoTeam === teamCorretto) return "green";
    if (teamPrecedenti.includes(tuoTeam)) return "yellow";
    return "red";
  }