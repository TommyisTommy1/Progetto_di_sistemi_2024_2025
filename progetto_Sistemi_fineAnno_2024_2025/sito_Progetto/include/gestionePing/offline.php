<?php

    // Funzione per guardare se l'user e' offline
    function isUserOffline($ultimoPing, $timeout) {
        
        // Ottiene il tempo attuale
        $oraAttuale = time();
    
        // Se sono passati più secondi del timeout, l'user e' offline
        return ($oraAttuale - $ultimoPing) > $timeout;
    }

?>
