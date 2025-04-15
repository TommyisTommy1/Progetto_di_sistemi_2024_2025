
// Funzioni per la gestione del login e dell'accesso

// Funzione per ottenere il login
function ottieniRegistrazione(){

    // Inizializza una stringa vuota per il login
    let login = "";

    // Aggiungi i campi di input per il login
    login += inserisciNome();
    login += inserisciCognome();
    login += inserisciDataNascita();
    login += inserisciSesso();
    login += inserisciResidenza();

    // Aggiungi i campi di input per username, email e password
    login += inserisciUsername();
    login += inserisciMail();
    login += inserisciPassword();
    login += inserisciConfermaPassword();

    // Aggiungi la checkbox per accettare i termini e le condizioni
    login += inserisciAccettoTerminiCondizioni();

    // Ritorno i dati
    return login;
}

function ottieniAccesso(){

    // Inizializza una stringa vuota per l'accesso
    let accesso = "";

    // Aggiungi i campi di input per username, email e password
    accesso += inserisciUsername();
    accesso += inserisciMail();
    accesso += inserisciPassword();
    accesso += inserisciConfermaPassword();

    // Ritorno i dati
    return accesso;
}

// Funzioni per la gestione dei campi di input

// Funzione per ottenere il nome
function inserisciNome(){
    let nome = "<br>";
    nome += "<label for='nome'>Inserisci il nome: </label>";
    nome += "<input type='text' name='nome' id='nome' class='nome' placeholder='Mario' required title='Inserisci la nome' />";
    return nome;
}

// Funzione per ottenere il cognome
function inserisciCognome(){
    let cognome = "<br>";
    cognome += "<label for='cognome'>Inserisci il cognome: </label>";
    cognome += "<input type='text' name='cognome' id='cognome' class='cognome' placeholder='Rossi' required title='Inserisci tuo cognome' />";
    return cognome;
}

// Funzione per ottenere la data di nascita
function inserisciDataNascita(){
    let dataNascita = "<br>";
    dataNascita += "<label for='dataNascita'>Inserisci la data di nascita: </label>";
    dataNascita += "<input type='date' name='dataNascita' id='dataNascita' class='dataNascita' placeholder='11/11/1111' required title='Inserisci la tua data di nascita' />";
    return dataNascita;
}

// Funzione per ottenere il sesso
function inserisciSesso(){
    let sesso = "<br>";
    sesso += "<div>Inserisci il sesso: ";
    
    sesso += ottieniSesso("M");
    sesso += ottieniSesso("F");
    sesso += ottieniSesso("Altro");
    sesso += ottieniSesso("Preferisco non dirlo");

    sesso += "</div>";

    return sesso;
}

// Funzione per ottenere il sesso in base al tipo
function ottieniSesso(tipo){
    let sesso = "<br>";
    sesso += "<input type='radio' name='sesso' id=" + tipo + " class='sesso' value=" + tipo + " required title='Inserisci il tuo sesso' />";
    sesso += "<label for=" + tipo + ">" + tipo + "</label>";
    return sesso;
}

// Funzione per ottenere la residenza
function inserisciResidenza(){
    let localita = "<br>";
    localita += "<label for='residenza'>Inserisci la localita': </label>";
    localita += "<select name='residenza' id='residenza' required  title='Inserisci la tua residenza tra quelle proposte'>";
    localita += "<option value='SelezionaLocalita'>Seleziona una localita</option>";

    for(let i = 0; i < citta.length; i++){
        localita += ottieniLocalita(citta[i]);
    }

    localita += "<option value='altreCitta'>altre città</option>";
    localita += "</select>";
    return localita;
}

// Funzione per ottenere la localita' in base alla citta'
function ottieniLocalita(citta){
    return "<option value=" + citta + ">" + citta + "</option>";
}

// Funzione per ottenere lo username
function inserisciUsername(){
    let username = "<br>";
    username += "<label for='username'>Inserisci lo username: </label>";
    username += "<input type='text' name='username' id='username' class='username' autocomplete='username' placeholder='Username' autocomplete='on'  title='Inserisci lo username se vuoi' />";
    return username;
}

// Funzione per ottenere la mail
function inserisciMail(){
    let mail = "<br>";
    mail += "<label for='mail'>Inserisci la mail: </label>";

    // Nel pattern la ^ indica l'inizio come deve iniziare, la $ indica la fine come deve finire, e il . indica qualsiasi carattere
    // Le \\ servono per far interpretare una sola \ e serve come escape per indicare cosa ci va dopo (Il punto)
    // Il {2,} indica che ci devono essere almeno 2 caratteri dopo il punto
    mail += "<input type='email' name='mail' id='mail' class='mail' placeholder='mail.prova@gmail.com' required pattern='[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\\.[a-z]{2,}$' autocomplete='on' title='Inserisci la mail' />";
    return mail;
}

// Funzione per ottenere la password
function inserisciPassword(){
    let password = "<br>";
    password += "<label for='password'>Inserisci la password: </label>";

    // Nel pattern la ^ indica l'inizio come deve iniziare, la $ indica la fine come deve finire, e il . indica qualsiasi carattere
    password += "<input type='password' name='password' id='password' class='password' placeholder='Password123' required minlength='8' pattern='^[a-zA-Z\\d]{8,}$' autocomplete='on' title='Inserisci la password' />";
    return password;
}

// Funzione per ottenere la conferma della password
function inserisciConfermaPassword(){
    let confermaPassword = "<br>";
    confermaPassword += "<label for='confermaPassword'>Conferma la password: </label>";

    // Nel pattern la ^ indica l'inizio come deve iniziare, la $ indica la fine come deve finire, e il . indica qualsiasi carattere
    confermaPassword += "<input type='password' name='confermaPassword' id='confermaPassword' class='confermaPassword' placeholder='Password123' minlength='8' pattern='^[a-zA-Z\\d]{8,}$' required autocomplete='on' title='Inserisci la password per la conferma' />";
    return confermaPassword;
}

// Funzione per ottenere la checkbox per accettare i termini e le condizioni
function inserisciAccettoTerminiCondizioni(){
    let accettoTeminiCondizioni = "<br>";
    accettoTeminiCondizioni += "<label for='accettoTeminiCondizioni'>Accetto i temini e le condizioni: </label>";
    accettoTeminiCondizioni += "<input type='checkbox' name='accettoTeminiCondizioni' id='accettoTeminiCondizioni' class='accettoTeminiCondizioni' required />";
    return accettoTeminiCondizioni;
}

// Variabile locale che contiene tutte le citta inseribili
let citta = [
    "Roma",  
    "Milano",  
    "Napoli",  
    "Torino",  
    "Palermo",  
    "Genova",  
    "Bologna",  
    "Firenze",  
    "Bari",  
    "Catania",  
    "Venezia",  
    "Verona",  
    "Messina",  
    "Padova",  
    "Trieste",  
    "Taranto",  
    "Brescia",  
    "Prato",  
    "Parma",  
    "Modena",  
    "Reggio Calabria",  
    "Reggio Emilia",  
    "Perugia",  
    "Livorno",  
    "Ravenna",  
    "Cagliari",  
    "Foggia",  
    "Rimini",  
    "Salerno",  
    "Ferrara",  
    "Sassari",  
    "Latina",  
    "Giugliano in Campania",  
    "Monza",  
    "Siracusa",  
    "Pescara",  
    "Bergamo",  
    "Forlì",  
    "Trento",  
    "Vicenza",  
    "Terni",  
    "Bolzano",  
    "Novara",  
    "Piacenza",  
    "Ancona",  
    "Andria",  
    "Arezzo",  
    "Udine",  
    "Cesena",  
    "Lecce"
];