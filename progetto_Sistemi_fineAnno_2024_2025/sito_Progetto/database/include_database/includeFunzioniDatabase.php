<?php
    /* START ------ CODICE DA COPIARE NELLE PAGINE DOVE UTILIZZO IL DATABASE ----- */
    // Libreria https://sleekdb.github.io/
    require_once __DIR__ . "/../sleekdb/Store.php";
    $configuration = ["timeout" => false]; // Senza questa riga segnala un errore
    // Cartella in cui vengono salvati i dati, può essere modificata
    $databaseDirectory = __DIR__ . "/../myDatabase"; 
    /* END ------ CODICE DA COPIARE NELLE PAGINE DOVE UTILIZZO IL DATABASE ------- */
    
    //creo l'oggetto db che si riferisce ai dati degli utenti
    $usersStore = new \SleekDB\Store("utente", $databaseDirectory, $configuration);
    
    require_once "includeFunzioniHashing.php";

    // Funzione per creare un nuovo utente nel database
    function creaNuovoUserDatabase($nome, $cognome, $dataNascita, $sesso, $residenza, $username, $mail, $password){
        
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
            ["immagineProfilo", "=", ""],
            ["nome", "=", "$nome"],
            ["cognome", "=", "$cognome"],
            ["dataNascita", "=", "$dataNascita"],
            ["sesso", "=", "$sesso"],
            ["residenza", "=", "$residenza"],
            ["username", "=", "$username"],
            ["mail", "=", "$mail"],
            ["password", "=", "$password"]
        ];

        // Inserisco il nuovo utente al database
        $utente = $usersStore -> insert($utente);

        // l'utente è stato creato con successo
        return true;
    }

    // Funzione per controllare se l'utente esiste nel database
    function recuperaAccessoDatabase($username, $mail, $password){

        global $usersStore;

        // Faccio l'hash della password
        $password = creaHashPassword($password);
        
        // Creo un criterio per trovare nel database l'utente
        $utente = [
            ["mail", "=", $mail],
            ["password", "=", $password]
        ];
        
        // Se l'username è stato inserito, lo aggiungo al criterio
        if(!empty($username)){
            $utente[] = ["username", "=", $username];
        }
        
        // Trovo l'utente (se c'e' torna un array, se non c'e' torna null)
        $risultato = $usersStore -> findOneBy($utente);

        if($risultato == null){
            
            // L'utente non è stato trovato
            return false;
        }

        // L'utente è stato trovato
        return true;
    }

    // Funzione per cambiare i dati dell'utente
    function ottieniDatiUtente($username, $mail){

        global $usersStore;
        
        // Creo un criterio per trovare nel database l'utente        
        $utente = ["mail", "=", $mail];

        if(!empty($username)){
            $utente[] = "and";
            $utente[] = ["username", "=", $username];
        }
        //findOneBy([["mail", "=", $mail],"and",["username", "=", $username]]);
        // Ottengo l'utente (se c'e' torna un array, se non c'e' torna null)
        $risultato = $usersStore -> findOneBy($utente);

        return $risultato;
    }

    
    // Funzione per eliminare un utente dal database
    function eliminaUtente($datiUtente){
        global $usersStore;

        // Elimino l'utente dal database
        $usersStore -> deleteBy($datiUtente);
    }

    // Funzione per ottenere i dati di tutti gli utenti
    function ottieniDatiUtenti(){

        global $usersStore;
        
        // Ottengo tutti gli utenti (se c'e' torna un array, se non c'e' torna null)
        $risultato = $usersStore -> findAll();

        if($risultato == null){
            
            // Non ci sono utenti nel database
            return $risultato;
        }

        // Restituisco i dati degli utenti
        return $risultato;
    }

    // Funzione per creare una tabella con i dati degli utenti
    function creaTabellaUtenti(){

        // Ottengo i dati degli utenti
        $utenti = ottieniDatiUtenti();

        // Creo la tabella per mostrare i dati degli utenti
        $tabella = "";

        if($utenti == null){
            
            // Non ci sono utenti nel database
            $tabella .= "<p class='messaggioErrore'>Nessun utente presente nel database</p>";
            return $tabella;
        }

        // Creo la tabella
        $tabella .= "<table class='tabellaUtenti'>";
        
        // Aggiungo l'intestazione della tabella
        $tabella .= "<tr>";
        $tabella .= "<th coolspan='9'>Tabella Degli Utenti Presenti Nel Database</th>";
        $tabella .= "</tr>";

        // Aggiungo i dati alla tabella
        for($i = 0; $i < count($utenti); $i++){

            // Aggiungo una riga alla tabella con i dati dell'utente
            $tabella .= "<tr>";

            // Aggiungo i dati dell'utente alla tabella
            $tabella .= "<td><img class='immagineProfilo' src='" . $utenti[$i]["immagineProfilo"] . "' alt='Immagine Profilo'></td>";
            $tabella .= "<td>" . $utenti[$i]["nome"] . "</td>";
            $tabella .= "<td>" . $utenti[$i]["cognome"] . "</td>";
            $tabella .= "<td>" . $utenti[$i]["dataNascita"] . "</td>";
            $tabella .= "<td>" . $utenti[$i]["sesso"] . "</td>";
            $tabella .= "<td>" . $utenti[$i]["residenza"] . "</td>";
            $tabella .= "<td>" . ($utenti[$i]["username"])? $utenti[$i]["username"] : "" . "</td>";
            $tabella .= "<td>" . $utenti[$i]["mail"] . "</td>";
            $tabella .= "<td>" . $utenti[$i]["password"] . "</td>";
            
            // La riga è stata completata
            $tabella .= "</tr>";
        }

        // Chiudo la tabella
        $tabella .= "</table>";

        return $tabella;
    }
?>