<!-- Questo file e' quello che serve per creare l'account o fare l'accesso al profilo -->
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
    <title>Login_Accesso</title> <!-- Titolo della Pagina Web -->
    <link rel="stylesheet" href="css/styleLoginAccesso.css"> <!-- Link al file Css che verra' usato per abbellire la pagina web -->
    <script type="text/javascript" src="javascript/scriptLoginAccesso/funzioni.js"></script>
    <script type="text/javascript" src="javascript/scriptLoginAccesso/variabili.js"></script>
</head> <!-- Fine intestazione -->
<body> <!-- Corpo della pagina web -->
    
    <!-- Titolo della Pagina web con decorazioni date dalla classe titoloPaginaWeb all'interno del Css -->
    <h1 class="titoloPaginaWeb">
        Login / Accesso
    </h1>

    <!-- Divisore per indicare il bottone per cambiare operazione -->
    <div class="cambiaOperazione">

        <!-- Bottone per cambiare operazione da login a registrazione o viceversa -->
        <input type="button" class="bottoneCambiaOperazione" id="bottoneCambiaOperazione" value="clicca per cambiare operazione" />
    </div>

    <!-- Divisore per indicare la parte del login/accesso -->
    <div class="login_accesso">

        <!-- Form che serve per inviare i dati -->
        <form action="controllerLoginAccesso.php" method="post">

            <!-- Divisore che conterra' i dati per il login o l'accesso(usando lo script di javascript) -->
            <div class="dati" id="dati"></div>
            <br>
            <!-- Divisore che serve per inviare i dati -->
            <input type="submit" name="submitDati" id="submitDati" class="submitDati" value="Invia i dati inseriti">

            <!-- Divisore che serve per indicare che operazione si ha fatto -->
            <input type="hidden" name="operazioneFatta" id="operazioneFatta" value="-">
        </form>

        <!-- Divisore che serve per indicare gli errori -->
        <div class="errori">
            <?php

                // Controllo se ci sono stati errori durante il login/accesso al database
                if(isset($_GET['err'])){

                    // Mostro gli errori
                    echo $_GET['err'];
                }
            ?>
        </div>
    </div>

    <!-- Divisore per indicare la parte per tornare alla home page -->
    <div class="goBack">

        <!-- Link per tornare alla pagina iniziale -->
        <a href="index.php" class="linkGoBack">Torna alla pagina iniziale</a>
    </div>

    <!-- Divisore per indicare la parte finale della pagina web -->
    <div id="parteFinale" class="parteFinale parteFinaleStatic">

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
    <script type="text/javascript" src="javascript/scriptLoginAccesso/scriptLoginAccesso.js"></script>
</body> <!-- Fine corpo -->
</html>