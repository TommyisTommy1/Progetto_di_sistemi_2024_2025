
<?php
    // Questo e' un commento
    
    function checkLogin($username, $mail, $password) {
        /* START ------ CODICE DA COPIARE NELLE PAGINE DOVE UTILIZZO IL DATABASE ----- */
        // Libreria https://sleekdb.github.io/
        require_once "../../database/sleekdb/Store.php";
        $configuration = ["timeout" => false]; // Senza questa riga segnala un errore
        // Cartella in cui vengono salvati i dati, può essere modificata
        $databaseDirectory = __DIR__ . "../../database/myDatabase"; 
        /* END ------ CODICE DA COPIARE NELLE PAGINE DOVE UTILIZZO IL DATABASE ------- */

        //creo l'oggetto db che si riferisce ai dati degli utenti
        $usersStore = new \SleekDB\Store("users", $databaseDirectory, $configuration); 

        
    }
?>