<!-- Questo file e' quello che contiene una descrizione riguardo alla pagina web e contiene i diversi videogiochi -->
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
    <title>Archivio_Videogames</title> <!-- Titolo della Pagina Web -->
    <link rel="stylesheet" href="css/styleArchivioVideogame.css"> <!-- Link al file Css che verra' usato per abbellire la pagina web -->
</head> <!-- Fine intestazione -->
<body> <!-- Corpo della pagina web -->
    
    <div class="titolo_menu">

        <!-- Titolo della Pagina web con decorazioni date dalla classe titoloPaginaWeb all'interno del Css -->
        <h1 class="titoloPaginaWeb">
            Archivio Videogames
        </h1>

        <!-- Tabella per il menu' per vedere le diverse pagine web raggiungibili -->
        <table class="menu">

            <tr>
                <!-- Parte di tabella che contiene il link alla pagina home -->
                <td class="index">

                    <!-- Link alla pagina home -->
                    <a href="index.php">Home Page</a>
                </td>
            </tr>

            <tr>
                <!-- Parte di tabella che contiene il link alla pagina del profilo -->
                <td class="pagina_profilo">

                    <!-- Link alla pagina web di profilo -->
                    <a href="pagina_profilo.php">Profilo</a>
                </td>
            </tr>

            <tr>
                <!-- Parte di tabella che contiene il link alla pagina degli strumenti -->
                <td class="strumenti">

                    <!-- Link alla pagina web degli strumenti -->
                    <a href="strumenti.php">Strumenti</a>
                </td>
            </tr>
        </table>
    </div>

    <!-- Divisore per indicare la descrizione della pagina web -->
    <div class="descrizione">

        <!-- Paragrafo per la descrizione -->
        <p class="descrizione">
            Questa pagina web contiene una descrizione generale dei videogiochi presenti.
            <br>
            Per visualizzare o provare un videogioco, cliccare sul nome del gioco.
            <br>
            Si possono ordinare i videogiochi per nome e genere.
        </p>
    </div>
    
    <!-- Bottoni per ordinare i videogiochi -->
    <div class="ordinatore">
        <h3>Ordina i giochi</h3>
        <select name="selectOrdinatore" id="selectOrdinatore">
            <option value="nome">Nome</option>
            <option value="random">Random</option>
        </select>
        <button type="button" class="bottoneOrdinatore" id="bottoneOrdinatore">Clicca per ordinare</button>
    </div>

    <!-- Lista dei videogiochi -->
    <div class="videogiochiOrdinati" id="videogiochiOrdinati"></div>

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
    <script type="text/javascript" src="javascript/scriptArchivioVideogame.js"></script>
</body> <!-- Fine corpo -->
</html>