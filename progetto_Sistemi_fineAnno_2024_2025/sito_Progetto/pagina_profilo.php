<!-- Questo file e' quello del profilo -->
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
    <title>Profilo</title> <!-- Titolo della Pagina Web -->
    <link rel="stylesheet" href="css/styleProfilo.css"> <!-- Link al file Css che verra' usato per abbellire la pagina web -->
</head> <!-- Fine intestazione -->
<body> <!-- Corpo della pagina web -->
    
    <div class="titolo_menu">

        <!-- Titolo della Pagina web con decorazioni date dalla classe titoloPaginaWeb all'interno del Css -->
        <h1 class="titoloPaginaWeb">
            Profilo
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
                <!-- Parte di tabella che contiene il link alla pagina dei videogame -->
                <td class="archivioVideogame">

                    <!-- Link alla pagina web dei videogames -->
                    <a href="archivio_videogame.php">Archivio Videogames</a>
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

    <!-- Divisore per indicare la parte della biografia -->
    <div class="biografia">

        <!-- Immagine del profilo -->
        <img src="" alt="ImmagineProfilo">

        <!-- Divisore per indicare la parte del nome -->       
        <div class="nome">
            Nome: 
            <span class="datiBiografia"></span>
        </div>

        <!-- Divisore per indicare la parte del cognome -->
        <div class="cognome">
            Cognome: 
            <span class="datiBiografia"></span>
        </div>
        
        <!-- Divisore per indicare la parte del sesso -->
        <div class="sesso">
            Sesso: 
            <span class="datiBiografia"></span>
        </div>
        
        <!-- Divisore per indicare la parte della localita' -->
        <div class="localita">
            Localita': 
            <span class="datiBiografia"></span>
        </div>
        
        <!-- Divisore per indicare la parte dello username -->
        <div class="username">
            Username: 
            <span class="datiBiografia"></span>
        </div>
        
        <!-- Divisore per indicare la parte della mail -->
        <div class="mail">
            Mail: 
            <span class="datiBiografia"></span>
        </div>
        
        <!-- Divisore per indicare la parte della password -->
        <div class="password">
            Password: <span class="datiBiografia"></span>
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
    <script type="text/javascript" src="javascript/scriptProfilo.js"></script>
</body> <!-- Fine corpo -->
</html>