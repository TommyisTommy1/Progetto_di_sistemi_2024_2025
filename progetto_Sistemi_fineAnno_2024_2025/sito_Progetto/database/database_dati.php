<!-- Questo file e' quello di mostrare i dati degli account -->
<!-- Questo e' un commento -->
<!-- Questo e' un gattino (=^.^=) -->

<?php
    /* START ------ CODICE DA COPIARE NELLE PAGINE DOVE UTILIZZO IL DATABASE ----- */
    // Libreria https://sleekdb.github.io/

    require_once "sleekdb/Store.php";
    $configuration = ["timeout" => false]; // Senza questa riga segnala un errore

    // Cartella in cui vengono salvati i dati, può essere modificata
    $databaseDirectory = __DIR__ . "/myDatabase";

    /* END ------ CODICE DA COPIARE NELLE PAGINE DOVE UTILIZZO IL DATABASE ------- */

    require_once "include_database/includeFunzioniDatabase.php";

    $datiUtenti = creaTabellaUtenti();
?>

<!DOCTYPE html>
<html lang="it"> <!-- Lingua di default = Italiano -->
<head> <!-- Testa della pagina web -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dati_Database</title> <!-- Titolo della Pagina Web -->
    <link rel="stylesheet" href="css_database/styleDatabase.css"> <!-- Link al file Css che verra' usato per abbellire la pagina web -->
</head> <!-- Fine intestazione -->
<body> <!-- Corpo della pagina web -->
    
    <!-- Titolo della Pagina web con decorazioni date dalla classe titoloPaginaWeb all'interno del Css -->
    <h1 class="titoloPaginaWeb">
        Dati Database
    </h1>

    <!-- Divisore per indicare l'elenco dei dati del database -->
    <div class="tabellaDatiDatabase">

        <!-- Tabella che mostra i dati salvati nel database -->
        <span class="tabellaDatabase">

            <!-- Tabella che mostra i dati salvati nel database -->
            <?php echo $datiUtenti; ?>
        </span>
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
    <script type="text/javascript" src="javascript_database/scriptDataBase.js"></script>
</body> <!-- Fine corpo -->
</html>