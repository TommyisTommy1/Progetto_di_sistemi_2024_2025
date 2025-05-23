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

            // Inizializzo la mail
            $_SESSION['mail'] = null;
        }
    }
    
    // Funzione per distruggere la sessione
    function distruggiSessione($paginaWeb){
        
        // Distruggo tutte le variabili di sessione
        session_unset();
        
        // Distruggo la sessione
        session_destroy();
        
        // Reindirizzo l'utente alla pagina di login
        header("Location: $paginaWeb");
        exit();
    }

    function distruggiSessioneConPassaParametriErrore($paginaWeb, $messaggioErrore){
        
        // Distruggo tutte le variabili di sessione
        session_unset();
                
        // Distruggo la sessione
        session_destroy();

        // Reindirizzo l'utente alla pagina di login
        header("Location: $paginaWeb?err=$messaggioErrore");
        exit();
    }
?>
