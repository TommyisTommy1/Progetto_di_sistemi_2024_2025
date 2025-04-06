<?php
    // Questo e' un commento
    
    // Includo i file che contengono funzioni che devo utilizzare
    require_once "../include/includeFunzioniDiGestione/includeFunzioneOttieniVideogiochi.php";
    require_once "../include/includeIndex/includeFunzioniIndex.php";

    $giocoRicerca = $_GET['giocoRicerca'];

    $ris = "";
    
    if(!empty($giocoRicerca)){
        
        if(controllaEsistenza($giocoRicerca, ottieniListaVideogiochi()) == true){
            // Ottieni il percorso del video gioco
            $link = ottieniPercorso($giocoRicerca);
            
            // Compongo il risultato corretto
            $ris .= "Gioco trovato, ";
            
            // Il link ritorna solo il nome di come dovrebbe essere scritto il file, senza percorso e senza estensione
            $ris .= "<a href=archivio_videogiochi/".$link."/".$link.".html>clicca qui</a>";
            
            // Fine componimento
            $ris .= " per giocarci";
        }else{

            // Non ha inserito un valore accettabile
            $ris .= "Non hai inserito un valore accettabile, reiseriscilo guardando dalla lista";
        }
    }else{
        
        // Non ha inserito un valore accettabile
        $ris .= "Non hai inserito nulla, la lista mostra cosa offriamo";
    }

    // Stampo il risultato
    echo $ris;
?>