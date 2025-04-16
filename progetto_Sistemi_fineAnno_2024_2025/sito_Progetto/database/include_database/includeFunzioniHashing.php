<?php
    // File di configurazione per l'hashing delle password
    require_once "fileConfigurazione.php";

    // Crea un hash della password
    function creaHashPassword($password){

        // Aggiungiamo il pepe alla password
        // per rendere l'hash piu' sicuro
        // L'algoritmo usato per l'hashing e' il SHA-256
        $pepe = hash_hmac("sha256", $password, ottieniPepeHash());

        // Uso password_hash che genera e applica automaticamente un salt sicuro
        // per l'hashing della password
        // L'algoritmo usato e' bcrypt
        $hash = password_hash($pepe, PASSWORD_BCRYPT);

        // Restituisce l'hash della password
        return $hash;
    }

    // Verifica se la password inserita e' corretta
    function verificaHashPassword($password, $hash){
    
        // Aggiungiamo il pepe alla password
        $pepe = hash_hmac("sha256", $password, ottieniPepeHash());
    
        // Verifica sicura con password_verify
        // che confronta l'hash della password con l'hash salvato
        // Restituisce true se la password e' corretta, false altrimenti
        return password_verify($pepe, $hash);
    }
?>