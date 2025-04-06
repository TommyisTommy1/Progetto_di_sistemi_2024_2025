<?php
    // Questo e' un commento

    // Questa funzione controlla se un video gioco esiste
    function controllaEsistenza($nome, $videogiochi){

        // Cerco se il nome del video gioco esiste nella lista
        for($i = 0; $i < count($videogiochi); $i++){

            // Se trovo il video gioco nella lista, ritorno true
            // Trasformo i nomi in minuscolo cosi' se si sbaglia a scrivere non c'e' nessun problema
            if(strtolower($videogiochi[$i]) == strtolower($nome)){
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

        // Ritorno il percorso senza la sua estensione
        return $percorso;
    }

?>