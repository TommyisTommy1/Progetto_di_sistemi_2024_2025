
// Funzione di hashing per cambiare la password (Non ritornabile a quella originale)
function customHash(password) {
    let hash = 0;
    
    for (let i = 0; i < password.length; i++) {
        // Ottiene il codice ASCII del carattere
        const codiceAscii = password.charCodeAt(i);

        // Shift bit a sinistra e somma
        hash = (hash << 10) - hash + codiceAscii;

        // Converte in intero a 32 bit
        hash = hash & hash;
    }

    return hash.toString(16); // Converti in esadecimale
}

// Funzione per aggiungere dati allo hash per far diventare piu' difficile la decodifica
function addSalt(password) {
    let salt = "";
    
    return salt;
}

// Funzione per aggiungere dati allo hash per far diventare piu' difficile la decodifica
function addPepper(password) {
    let pepper = "";
    
    return pepper;
}