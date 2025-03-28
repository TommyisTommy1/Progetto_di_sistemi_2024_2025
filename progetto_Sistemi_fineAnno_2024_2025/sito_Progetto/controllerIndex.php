<?php
    // Questo e' un commento

    // Controllo se ha cliccato il bottone di ricerca
    if(isset($_POST['submitRicerca'])){
        // Ha cliccato il bottone di ricerca
        
        $ris = "";
        $redirect = "";

        if(!empty($_POST['inputRicerca']) && $_POST['inputRicerca'] != 0 && controllaEsistenza($_POST['inputRicerca'])){
            // C'e' un videogioco

            // Ottieni il percorso del video gioco
            $link = ottieniPercorso($_POST['inputRicerca']);

            // Compongo il redirect
            $redirect .= "archivio_videogiochi/$link/$link.html";
        }else{
            // Non ha inserito un valore accettabile
            $ris = "Non hai inserito nulla o hai inserito un dato non corretto, la lista mostra cosa offriamo";
        }

        // Redirige alla pagina di risultati con il risultato e il redirect
        header("Location: index.html?ris=$ris&redirect=$redirect");
        exit();
    }

    // Questa funzione controlla se un video gioco esiste
    function controllaEsistenza($nome){

        // Array di videogiochi
        $videogiochi = 
        [
            "2048 Blocks merge",
            "Battaglia Navale",
            "Forza 4",
            "Gioco delle 3 carte",
            "Impiccato",
            "Tris",
            "Woordle"
        ];

        // Cerco se il nome del video gioco esiste nella lista
        for($i = 0; $i < count($videogiochi); $i++){

            // Se trovo il video gioco nella lista, ritorno true
            if($videogiochi[$i] == $nome){
                return true;
            }
        }

        // Se non trovo il video gioco nella lista, ritorno false
        return false;
    }

    // Funzione per ottenere il percorso
    function ottieniPercorso($nome){
        $percorso = ""; // Variabile che conterra' il percorso

        // Calcolo del percorso
        // Vado da 0 alla lunghezza della stringa inserita
        for($i = 0; $i < strlen($nome); $i++){

            // Se il carattere e' un spazio lo sostituisco con '_'
            if($nome[$i] == ' '){
                $percorso .= '_';
            }else{ // Altrimenti lo metto in minuscolo
                $percorso .= strtolower($nome[$i]);
            }
        }

        // Ritorno il percorso
        return $percorso;
    }

?>