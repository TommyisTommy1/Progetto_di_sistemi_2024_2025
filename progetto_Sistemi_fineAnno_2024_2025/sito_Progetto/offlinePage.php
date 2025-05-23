<!-- Questo file e' quello  -->
<!-- Questo e' un commento -->
<!-- Questo e' un gattino (=^.^=) -->

<!-- Codice php che verra' eseguito all'inizio -->
<?php
    // Inizio o recupero i dati della sessione
    session_start();

    // Includo i file che contengono funzioni che devo utilizzare

    // Richiedo la funzione dentro il file che la contiene e la utilizzo prima di fare altre operazioni
    // poiche' cosi' recupero o inizializzo i dati
    require_once "include/includeFunzioniDiGestione/includeFunzioniInizializzazioneSessione.php";

    // Inizializzo i dati della sessione
    inizializzaSessione();
    
?>

<!DOCTYPE html>
<html lang="it"> <!-- Lingua di default = Italiano -->
<head> <!-- Testa della pagina web -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>offline</title> <!-- Titolo della Pagina Web -->
    <link rel="stylesheet" href="css/styleOffline.css"> <!-- Link al file Css che verra' usato per abbellire la pagina web -->
</head> <!-- Fine intestazione -->
<body> <!-- Corpo della pagina web -->
    
    <!-- Titolo della Pagina web con decorazioni date dalla classe titoloPaginaWeb all'interno del Css -->
    <h1 class="titoloPaginaWeb">
        Offline
    </h1>

    <div class="descrizione">
        <img src="img/img_offline/animePiangendo.png" alt="animePiangendo" class="animePiangendo">
        <div>
            <p>Sei offline</p>
            <a href="index.php">Ritenta la connessione</a>
        </div>
    </div>

    <!-- Divisore per indicare la parte finale della pagina web -->
    <div class="parteFinale">

        <!-- Divisore per indicare il copyright della pagina web -->
        <p class="copyright">
            &copy; <!-- Emoji/Icona del copyright -->
            Copyright 2024-2025 Progetto Sistemi Informatici. 
            <br>
            All rights reserved. Tutti i diritti sono riservati.
            &copy; <!-- Emoji/Icona del copyright -->
        </p>

        <!-- Divisore per indicare i termini e condizioni della pagina web -->
        <p class="termini_condizioni">

            <!-- Link ai termini e condizioni della pagina web -->
            <a target="_blank" href="termini_condizioni/termini_condizioni.html">Termini e Condizioni</a>
        </p>
    </div>

    <!-- Script javascript che verra' usato dalla pagina web -->
    <script type="text/javascript" src="javascript/scriptOffline.js"></script>
</body> <!-- Fine corpo -->
</html>