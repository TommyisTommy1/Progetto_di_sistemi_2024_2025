<!-- Questo file e' quello che contiene diversi strumenti utili -->
<!-- Questo e' un commento -->
<!-- Questo e' un gattino (=^.^=) -->

<!-- Codice php che verra' eseguito all'inizio -->
<?php
    // Inizio o recupero i dati della sessione
    session_start();

    // Includo i file che contengono funzioni che devo utilizzare

    
?>

<!DOCTYPE html>
<html lang="it"> <!-- Lingua di default = Italiano -->
<head> <!-- Testa della pagina web -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Strumenti</title> <!-- Titolo della Pagina Web -->
    <link rel="stylesheet" href="css/styleStrumenti.css"> <!-- Link al file Css che verra' usato per abbellire la pagina web -->
    <script src="javascript/scriptStrumenti/funzioni.js"></script>
    <script src="javascript/scriptStrumenti/variabili.js"></script>
</head> <!-- Fine intestazione -->
<body> <!-- Corpo della pagina web -->
    
    <!-- Titolo della Pagina web con decorazioni date dalla classe titoloPaginaWeb all'interno del Css -->
    <div class="titolo_menu">

        <!-- Titolo della Pagina web con decorazioni date dalla classe titoloPaginaWeb all'interno del Css -->
        <h1 class="titoloPaginaWeb">
            Strumenti
        </h1>

        <!-- Tabella per il menu' per vedere le diverse pagine web raggiungibili -->
        <table class="menu">

            <tr>
                <!-- Parte di tabella che contiene il link alla pagina home -->
                <td class="index">

                    <!-- Link alla pagina home -->
                    <a href="index.html">Home Page</a>
                </td>
            </tr>

            <tr>
                <!-- Parte di tabella che contiene il link alla pagina dei videogame -->
                <td class="archivioVideogame">

                    <!-- Link alla pagina web dei videogames -->
                    <a href="archivio_videogame.html">Archivio Videogames</a>
                </td>
            </tr>

            <tr>
                <!-- Parte di tabella che contiene il link alla pagina del profilo -->
                <td class="pagina_profilo">

                    <!-- Link alla pagina web di profilo -->
                    <a href="pagina_profilo.html">Profilo</a>
                </td>
            </tr>
        </table>
    </div>

    <!-- Divisore per indicare la parte della calcolatrice -->
    <div class="calcolatrice" id="calcolatrice"></div>

    <!-- Divisore per indicare la parte del generatore di password -->
    <div class="generatorePassword" id="generatorePassword"></div>

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
    <script type="text/javascript" src="javascript/scriptStrumenti/scriptStrumenti.js"></script>
</body> <!-- Fine corpo -->
</html>