
// Funzioni per la gestione del login e dell'accesso

function ottieniLogin(){
    let login = "";

    login += inserisciNome();
    login += inserisciCognome();
    login += inserisciDataNascita();
    login += inserisciSesso();
    login += inserisciResidenza();

    login += inserisciUsername();
    login += inserisciMail();
    login += inserisciPassword();
    login += inserisciConfermaPassword();

    login += inserisciAccettoTerminiCondizioni();

    return login;
}

function ottieniAccesso(){
    let accesso = "";

    accesso += inserisciUsername();
    accesso += inserisciMail();
    accesso += inserisciPassword();
    accesso += inserisciConfermaPassword();

    return accesso;
}


function inserisciNome(){
    let nome = "<br>";
    nome += "<label for='nome'>Inserisci il nome: </label>";
    nome += "<input type='text' name='nome' id='nome' class='nome' placeholder='Mario' required />";
    return nome;
}

function inserisciCognome(){
    let cognome = "<br>";
    cognome += "<label for='cognome'>Inserisci il cognome: </label>";
    cognome += "<input type='text' name='cognome' id='cognome' class='cognome' placeholder='Rossi' required />";
    return cognome;
}

function inserisciDataNascita(){
    let dataNascita = "<br>";
    dataNascita += "<label for='dataNascita'>Inserisci la data di nascita: </label>";
    dataNascita += "<input type='date' name='dataNascita' id='dataNascita' class='dataNascita' placeholder='11/11/1111' required />";
    return dataNascita;
}

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

function ottieniSesso(tipo){
    let sesso = "<br>";
    sesso += "<input type='radio' name='sesso' id=" + tipo + " class='sesso' value=" + tipo + " required />";
    sesso += "<label for=" + tipo + ">" + tipo + "</label>";
    return sesso;
}

function inserisciResidenza(){
    let localita = "<br>";
    localita += "<label for='residenza'>Inserisci la localita': </label>";
    localita += "<select name='residenza' id='residenza'>";
    localita += "<option value='SelezionaLocalita'>Seleziona una localita</option>";

    for(let i = 0; i < citta.length; i++){
        localita += ottieniLocalita(citta[i]);
    }

    localita += "<option value='altreCitta'>altre città</option>";
    localita += "</select>";
    return localita;
}

function ottieniLocalita(citta){
    return "<option value=" + citta + ">" + citta + "</option>";
}

function inserisciUsername(){
    let username = "<br>";
    username += "<label for='username'>Inserisci lo username: </label>";
    username += "<input type='text' name='username' id='username' class='username' autocomplete='username' placeholder='Username' />";
    return username;
}

function inserisciMail(){
    let mail = "<br>";
    mail += "<label for='mail'>Inserisci la mail: </label>";
    mail += "<input type='mail' name='mail' id='mail' class='mail' placeholder='mail.prova@gmail.com' />";
    return mail;
}

function inserisciPassword(){
    let password = "<br>";
    password += "<label for='password'>Inserisci la password: </label>";
    password += "<input type='password' name='password' id='password' class='password' placeholder='Password123' required />";
    return password;
}

function inserisciConfermaPassword(){
    let confermaPassword = "<br>";
    confermaPassword += "<label for='confermaPassword'>Conferma la password: </label>";
    confermaPassword += "<input type='password' name='confermaPassword' id='confermaPassword' class='confermaPassword' placeholder='Password123' required />";
    return confermaPassword;
}

function inserisciAccettoTerminiCondizioni(){
    let accettoTeminiCondizioni = "<br>";
    accettoTeminiCondizioni += "<label for='accettoTeminiCondizioni'>Accetto i temini e le condizioni: </label>";
    accettoTeminiCondizioni += "<input type='checkbox' name='accettoTeminiCondizioni' id='accettoTeminiCondizioni' class='accettoTeminiCondizioni' required />";
    return accettoTeminiCondizioni;
}


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