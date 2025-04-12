<?php
    /* START ------ CODICE DA COPIARE NELLE PAGINE DOVE UTILIZZO IL DATABASE ----- */
    // Libreria https://sleekdb.github.io/
    require_once "../../database/sleekdb/Store.php";
    $configuration = ["timeout" => false]; // Senza questa riga segnala un errore
    // Cartella in cui vengono salvati i dati, può essere modificata
    $databaseDirectory = "../../database/myDatabase"; 
    /* END ------ CODICE DA COPIARE NELLE PAGINE DOVE UTILIZZO IL DATABASE ------- */
    
    //creo l'oggetto db che si riferisce ai dati degli utenti
    $usersStore = new \SleekDB\Store("utente", $databaseDirectory, $configuration);
    
    require_once "../includeFunzioniDiGestione/includeFunzioniHashing.php";

    
    function creaNuovoUserDatabase($nome, $cognome, $dataNascita, $sesso, $residenza, $username, $mail, $password){
        
        // Funzione per creare un nuovo utente nel database
        global $usersStore;

        // Controllo se la mail e' già stata utilizzata
        if($usersStore -> findOneBy(["mail", "=", "$mail"]) == true){
            
            // La mail è già stata utilizzata
            // L'utente non può essere creato perche' esiste gia'
            return false;
        }

        // Faccio l'hash della password
        $password = creaHashPassword($password);

        // Salvataggio dei dati per il criterio
        $utente = [
            "nome" => $nome,
            "cognome" => $cognome,
            "dataNascita" => $dataNascita,
            "sesso" => $sesso,
            "residenza" => $residenza,
            "username" => $username,
            "mail" => $mail,
            "password" => $password
        ];

        // Inserisco il nuovo utente al database
        $utente = $usersStore -> insert($utente);

        // l'utente è stato creato con successo
        return true;
    }

    function recuperaAccessoDatabase($username, $mail, $password){
        global $usersStore;

        // Faccio l'hash della password
        $password = creaHashPassword($password);
        
        // Creo un criterio per trovare nel database l'utente
        $utente = [
            "mail" => $mail,
            "password" => $password
        ];
        
        // Se l'username è stato inserito, lo aggiungo al criterio
        if(!empty($username)){
            $utente["username"] = $username;
        }
        
        // Trovo l'utente (se c'e' torna un array, se non c'e' torna null)
        $risultato = $usersStore -> findOneBy($utente);

        if(!empty($risultato)){
            
            // L'utente non è stato trovato
            return false;
        }

        // L'utente è stato trovato
        return true;
    }

    function ottieniDatiUtente($mail, $password){
        // Funzione per cambiare i dati dell'utente
        // Recupero i dati dell'utente dal database e li modifico
        // Salvo i dati modificati nel database

        global $usersStore;

        // Faccio l'hash della password
        $password = creaHashPassword($password);
        
        // Creo un criterio per trovare nel database l'utente
        $utente = [
            "mail" => $mail,
            "password" => $password
        ];
        
        // Ottengo l'utente (se c'e' torna un array, se non c'e' torna null)
        $risultato = $usersStore -> findOneBy($utente);

        return $risultato;
    }
?>