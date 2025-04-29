<?php
    function ordinaNome($array){
        // Funzione per ordinare un array di videogiochi in ordine alfabetico
        sort($array);
        return $array;
    }

    function ordinaRandom($array){
        // Randomizzo l'array
        // La funzione shuffle mescola gli elementi dell'array in modo casuale
        shuffle($array);
        return $array;
    }
?>