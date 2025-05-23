<!-- Questo file e' segreto -->
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
    <title>Shhh!!!</title> <!-- Titolo della Pagina Web -->
    <link rel="stylesheet" href="css/styleSegreto.css"> <!-- Link al file Css che verra' usato per abbellire la pagina web -->
</head> <!-- Fine intestazione -->
<body> <!-- Corpo della pagina web -->
    
    <!-- Titolo della Pagina web con decorazioni date dalla classe titoloPaginaWeb all'interno del Css -->
    <h1 class="titoloPaginaWeb">
        Segreto
    </h1>

    <p class="descrizione">
        
    </p>

    <p class="segreto">

    </p>

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
            <a target="_blank" href="termini_condizioni/termini_condizioni.php">Termini e Condizioni</a>
        </p>
    </div>

    <!-- Script javascript che verra' usato dalla pagina web -->
    <script type="text/javascript" src="javascript/scriptSegreto.js"></script>
</body> <!-- Fine corpo -->
</html>