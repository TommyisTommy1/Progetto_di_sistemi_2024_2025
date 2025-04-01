<?php
    // Questo e' un commento
    
    // Funzioni richieste
    require_once "include/includeFunzioneOttieniVideogiochi.php";
    require_once "include/includeIndex/includeFunzioniIndex.php";

    // Controllo se ha cliccato il bottone di ricerca
    if(isset($_POST['submitRicerca'])){
        // Ha cliccato il bottone di ricerca
        
        $ris = "";
        $redirect = "";

        if(!empty($_POST['inputRicerca']) && $_POST['inputRicerca'] != 0 && controllaEsistenza($_POST['inputRicerca'], ottieniListaVideogiochi())){
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
?>