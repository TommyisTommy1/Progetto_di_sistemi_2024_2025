<?php

    // Funzione per ottenere il pepe per l'hashing delle password
    function ottieniPepeHash(){
        
        // Questa funzione restituisce il pepe da usare per l'hashing delle password
        
        // Il pepe è una stringa segreta che viene usata per rendere l'hash più sicuro
        $pepe = "qWErty123456!@#$%^&*()_+|~`-=[]{};':,.<>?";
        
        return $pepe;
    }
?>