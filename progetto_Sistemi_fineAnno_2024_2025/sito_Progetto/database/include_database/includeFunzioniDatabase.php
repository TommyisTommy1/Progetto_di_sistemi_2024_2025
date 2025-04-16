<?php
    /* START ------ CODICE DA COPIARE NELLE PAGINE DOVE UTILIZZO IL DATABASE ----- */
    // Libreria https://sleekdb.github.io/
    require_once __DIR__ . "/../sleekdb/Store.php";

    // Senza questa riga segnala un errore
    // Deprecated
    $configuration = ["timeout" => false];
    
    // Cartella in cui vengono salvati i dati, può essere modificata
    $databaseDirectory = __DIR__ . "/../myDatabase"; 
    
    /* END ------ CODICE DA COPIARE NELLE PAGINE DOVE UTILIZZO IL DATABASE ------- */
    
    //creo l'oggetto db che si riferisce ai dati degli utenti
    $usersStore = new \SleekDB\Store("databaseUtenti", $databaseDirectory, $configuration);
    
    require_once "includeFunzioniHashing.php";

    // Funzione per creare un nuovo utente nel database
    function creaNuovoUserDatabase($nome, $cognome, $dataNascita, $sesso, $residenza, $username, $mail, $password){
        
        global $usersStore;

        // Controllo se la mail e' già stata utilizzata
        if($usersStore -> findOneBy(["mail", "=", $mail]) == true){
            
            // La mail è già stata utilizzata
            // L'utente non può essere creato perche' esiste gia'
            return false;
        }

        // Faccio l'hash della password
        $password = creaHashPassword($password);

        // Salvataggio dei dati per il criterio
        $utente = ottieniArrayDati($nome, $cognome, $dataNascita, $sesso, $residenza, $username, $mail, $password);

        // Inserisco il nuovo utente al database
        $utente = $usersStore -> insert($utente);

        // l'utente è stato creato con successo
        return true;
    }

    // Funzione per controllare se l'utente esiste nel database
    function recuperaAccessoDatabase($username, $mail, $password){

        global $usersStore;

        
        // Creo un criterio per trovare nel database l'utente
        $utente = [
            ["username", "=", $username],
            "AND",
            ["mail", "=", $mail]
        ];
        
        // Trovo l'utente (se c'e' torna un array, se non c'e' torna null)
        $risultato = $usersStore -> findBy($utente, ["_id" => "asc"], 1);
        
        if($risultato == null){
            
            // L'utente non è stato trovato
            return false;
        }
        
        // Assegno ad utente l'utente trovato
        $utente = $risultato[0];

        // Controllo se la password e' la stessa
        if(verificaHashPassword($password, $utente["password"]) == false){

            // Password non corretta
            return false;
        }

        // L'utente è stato trovato, la password era corretta
        return true;
    }

    // Funzione per cambiare i dati dell'utente
    function ottieniDatiUtente($username, $mail){

        global $usersStore;
        
        // Creo un criterio per trovare nel database l'utente        
        $utente = [
            ["username", "=", $username],
            "AND",
            ["mail", "=", $mail]
        ];
        
        // Trovo l'utente (se c'e' torna un array, se non c'e' torna null)
        $risultato = $usersStore -> findBy($utente, ["_id" => "asc"], 1);

        if($risultato != null){
            
            // L'utente è stato trovato
            return $risultato[0];
        }

        return $risultato;
    }

    
    // Funzione per eliminare un utente dal database
    function eliminaUtente($username, $mail){
        global $usersStore;

        $utente = [
            ["mail", "=", $mail],
            "AND",
            ["username", "=", $username]
        ];

        // Elimino l'utente dal database
        $risultato = $usersStore -> deleteBy($utente);

        if($risultato == false){
            
            // L'utente non è stato eliminato
            print_r("Utente non eliminato");
        }

        // L'utente è stato eliminato
        print_r("Utente eliminato");
    }

    // Funzione per ottenere i dati di tutti gli utenti
    function ottieniDatiUtenti(){

        global $usersStore;
        
        // Ottengo tutti gli utenti (se c'e' torna un array, se non c'e' torna null)
        $risultato = $usersStore -> findAll(["_id" => "asc"]);

        if($risultato == null){
            
            // Non ci sono utenti nel database
            return "<div>Nessun utente loggato</div>";
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
        $tabella .= "<th colspan='9'>Tabella Degli Utenti Presenti Nel Database</th>";
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
            $tabella .= "<td>" . (($utenti[$i]["username"])? $utenti[$i]["username"] : "") . "</td>";
            $tabella .= "<td>" . $utenti[$i]["mail"] . "</td>";
            $tabella .= "<td>" . $utenti[$i]["password"] . "</td>";
            
            // La riga è stata completata
            $tabella .= "</tr>";
        }

        // Chiudo la tabella
        $tabella .= "</table>";

        return $tabella;
    }

    function ottieniArrayDati($nome, $cognome, $dataNascita, $sesso, $residenza, $username, $mail, $password){
        return [
            "immagineProfilo" => "",
            "nome" => $nome,
            "cognome" => $cognome,
            "dataNascita" => $dataNascita,
            "sesso" => $sesso,
            "residenza" => $residenza,
            "username" => $username,
            "mail" => $mail,
            "password" => $password
        ];
    }
?>
