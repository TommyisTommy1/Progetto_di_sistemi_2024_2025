<!-- Questo file e' quello principale e il primo a vedere quando si accede al sito web -->
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

    // Includo il file che contiene la funzione per ottenere i videogiochi
    require_once "include/includeFunzioniDiGestione/includeFunzioneOttieniVideogiochi.php";
?>

<!DOCTYPE html>
<html lang="it"> <!-- Lingua di default = Italiano -->
<head> <!-- Testa della pagina web -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagina_Iniziale_Sito_Progetto_Sistemi</title> <!-- Titolo della Pagina Web -->
    <link rel="stylesheet" href="css/styleIndex.css"> <!-- Link al file Css che verra' usato per abbellire la pagina web -->
    <link rel="icon" href="icon/its_amongus.png"> <!-- Icona del sito web che verra' usata per il browser -->
</head> <!-- Fine intestazione -->
<body> <!-- Corpo della pagina web -->
    
    <div class="titolo_menu">

        <!-- Titolo della Pagina web con decorazioni date dalla classe titoloPaginaWeb all'interno del Css -->
        <h1 class="titoloPaginaWeb">
            Progetto di Sistemi
        </h1>

        <!-- Tabella per il menu' per vedere le diverse pagine web raggiungibili -->
        <table class="menu">

            <tr>
                <!-- Parte di tabella che contiene il link alla pagina dei videogame -->
                <td class="archivioVideogame">

                    <!-- Link alla pagina web dei videogames -->
                    <a href="archivio_videogame.php">Archivio Videogames</a>
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
    
    <!-- Divisore per indicare la barra di ricerca della pagina web -->
    <div class="barraDiRicerca">

        <!-- Form per controllare una ricerca fatta -->
        <form action="controllerIndex.php" method="post">
            
            <!-- Casella di input per quello che si vuole cercare, ha autocompletamento + il massimo che si puo' digitare e' 50 -->
            <input type="search" class="inputRicerca" autocomplete="on" list="giochi" maxlength="50" name="inputRicerca" id="inputRicerca" placeholder="Inserisci il nome di un gioco" />

            <!-- Datalist per dare dei suggerimenti di ricerca -->
            <datalist id="giochi">
                
                <?php
                    $arrayVideogiochi = ottieniListaVideogiochi();
                    for($i = 0; $i < count($arrayVideogiochi); $i++){
                        // Stampa il nome del gioco
                        echo "<option value=\"".$arrayVideogiochi[$i]."\"></option>";
                    }
                ?>
                
            </datalist>

            <!-- Casella di input per inviare quello che si vuole cercare con immagine emoji -->
            <input type="submit" class="submitRicerca" value="&#128269;" name="submitRicerca" id="submitRicerca" />
        </form>
        
        <!-- Divisore per indicare la risposta della ricerca della pagina web -->
        <div class="rispostaRicerca"></div>
    </div>

    <!-- Divisore per indicare la descrizione della pagina web -->
    <div class="descrizione">

        <!-- Paragrafo per la descrizione della pagina web -->
        <p>
            Questo sito web e' stato creato per il 
            progetto di Sistemi Informatici dell'anno 2024/2025.
            <br>
            Il sito web e' stato creato da 
            <strong>Ferrarese Tommaso</strong> 
            e 
            <strong>Zampieron Andrea</strong>.
            <br>
            Il sito web e' stato creato per permettere di visualizzare 
            un archivio di videogiochi e permettere di fare delle ricerche.
            <br>
            Il sito web permette anche di accedere ad un account per 
            poter visualizzare i propri dati salvati in un database.
            <br>
            Il sito web permette anche di visualizzare degli 
            strumenti per poter fare delle operazioni.
        </p>
    </div>

    <!-- Divisore per indicare la parte dell'animazione della pagina web -->
    <div class="posizioneAnimazione">

        <!-- Divisore per indicare l'animazione della pagina web -->
        <div class="animazione">

            <!-- Immagine animata -->
            <img class="imgAnimazione" src="img/img_index/gattino-gatto-cat-pixel-pixelart-tazza.jpg" alt="gattino">
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
    <script type="text/javascript" src="javascript/scriptPaginaIniziale.js"></script>
</body> <!-- Fine corpo -->
</html>