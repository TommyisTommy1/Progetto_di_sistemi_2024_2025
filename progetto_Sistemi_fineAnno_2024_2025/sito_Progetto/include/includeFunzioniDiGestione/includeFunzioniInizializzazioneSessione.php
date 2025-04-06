<?php
    // Questo e' un commento

    // Funzione per inizializzare la sessione
    // Questa funzione viene chiamata all'inizio di ogni pagina per garantire che la sessione sia sempre inizializzata
    function inizializzaSessione(){

        // Inizio o recupero i dati della sessione se non esiste
        if(session_status() == PHP_SESSION_NONE){
            
            // La sessione non e' stata ancora avviata, quindi la avvio
            session_start();
        }

        // Controllo se la sessione e' gia' stata inizializzata
        if(!isset($_SESSION['inizializzata'])){
            
            // La sessione non e' stata inizializzata, quindi la inizializzo
            $_SESSION['inizializzata'] = true;

            // Inizializzo l'username a null
            $_SESSION['username'] = null;

            // Inizializzo l'accesso a false
            $_SESSION['accesso'] = false;
        }
    }
    
?>
