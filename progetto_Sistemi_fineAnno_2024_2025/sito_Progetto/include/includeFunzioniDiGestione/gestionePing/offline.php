<?php

    // Funzione per guardare se l'user e' offline
    function isUserOffline($ultimoPing, $timeout) {
        
        // Ottiene il tempo attuale
        $oraAttuale = time();
    
        // Se sono passati più secondi del timeout, l'user e' offline
        return ($oraAttuale - $ultimoPing) > $timeout;
    }

    // Funzione per guardare se l'user e' offline con reindirizzamento
    // Se l'utente e' offline, reindirizza alla pagina specificata
    function isUserOfflineRedirect($ultimoPing, $timeout, $paginaRedirect) {
        
        // Ottiene il tempo attuale
        $oraAttuale = time();
    
        // Se sono passati più secondi del timeout, l'user e' offline
        if(($oraAttuale - $ultimoPing) > $timeout){

            // Reindirizza alla pagina specificata
            header("Location: $paginaRedirect");

            // Termina lo script dopo il reindirizzamento
            exit();
        }
    }

?>
