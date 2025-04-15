<!-- Questo file e' quello del profilo -->
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
    
    if($_SESSION['accesso'] == false){
        header("Location: registrazione_accesso.php");
        exit();
    }
    
    require_once "database/include_database/includeFunzioniDatabase.php";
    
    $datiUtente = ottieniDatiUtente($_SESSION['username'], $_SESSION['mail']);

    if(isset($_POST['bottoneEliminaAccount'])){
        // Se l'utente ha premuto il bottone per eliminare l'account
        // Elimino l'account dell'utente e chiudo la sessione
        eliminaUtente($_SESSION['username'], $_SESSION['mail']);
    }
    
    // Se l'utente ha premuto il bottone per chiudere la sessione o per eliminare l'account
    if(isset($_POST['bottoneChiudiSessione']) || isset($_POST['bottoneEliminaAccount']) || $datiUtente == null){

        $err = "";

        // Se l'utente ha premuto il bottone per chiudere la sessione
        if(isset($_POST['bottoneChiudiSessione'])){

            // Messaggio di chiusura sessione
            $err = "Sessione chiusa con successo!";
        }

        // Se l'utente ha premuto il bottone per eliminare l'account
        if(isset($_POST['bottoneEliminaAccount'])){

            // Messaggio di eliminazione account
            $err = "Account eliminato con successo!";
        }

        // Credenziali non trovate
        if($datiUtente == null){

            // Messaggio di errore
            $err = "Credenziali non trovate";
        }

        // Chiudo la sessione e reindirizzo alla pagina di login
        distruggiSessioneConPassaParametriErrore("registrazione_accesso.php", $err);
    }
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
        <div class="immagineProfilo">
            <img src="<?php echo (!empty($datiUtente['immagineProfilo']))? $datiUtente['immagineProfilo'] : "img/img_pagina_profilo/utente.png" ?>" alt="ImmagineProfilo">
        </div>

        <!-- Divisore per indicare la parte del nome -->       
        <div class="nome">
            Nome: 
            <span class="datiBiografia">
                <input type="text" class="campoNomeUtente" id="campoNomeUtente" value="<?php echo $datiUtente['nome'] ?>" readonly>
            </span>
        </div>

        <!-- Divisore per indicare la parte del cognome -->
        <div class="cognome">
            Cognome: 
            <span class="datiBiografia">
                <input type="text" class="campoCognomeUtente" id="campoCognomeUtente" value="<?php echo $datiUtente['cognome']; ?>" readonly>
            </span>
        </div>
        
        <!-- Divisore per indicare la parte del sesso -->
        <div class="sesso">
            Sesso: 
            <span class="datiBiografia">
                <input type="text" class="campoSessoUtente" id="campoSessoUtente" value="<?php echo $datiUtente['sesso']; ?>" readonly>
            </span>
        </div>
        
        <!-- Divisore per indicare la parte della residenza -->
        <div class="residenza">
            Residenza': 
            <span class="datiBiografia">
                <input type="text" class="campoResidenzaUtente" id="campoResidenzaUtente" value="<?php echo $datiUtente['residenza']; ?>" readonly>
            </span>
        </div>
        
        <!-- Divisore per indicare la parte dello username -->
        <div class="username">
            Username: 
            <span class="datiBiografia">
                <input type="text" class="campoUsernameUtente" id="campoUsernameUtente" value="<?php echo $datiUtente['username']; ?>" readonly>
            </span>
        </div>
        
        <!-- Divisore per indicare la parte della mail -->
        <div class="mail">
            Mail: 
            <span class="datiBiografia">
                <input type="text" class="campoMailUtente" id="campoMailUtente" value="<?php echo $datiUtente['mail']; ?>" readonly>
            </span>
        </div>
        
        <!-- Divisore per indicare la parte della password (Verra' mostrato l'hash) -->
        <div class="password">
            Password: <span class="datiBiografia">
                <input type="password" class="campoPasswordUtente" id="campoPasswordUtente" value="<?php echo $datiUtente['password']; ?>" readonly>
            </span>
            <button type="button" class="bottoneMostraPassword" id="bottoneMostraPassword">Rendi Password visibile</button>
        </div>
    </div>

    <div class="chiudiSessione">
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
            
            <!-- Bottone per modificare i dati del profilo -->
            <input type="button" class="bottoneModificaDati" id="bottoneModificaDati" name="bottoneModificaDati" value="Modifica Dati">
            
            <!-- Bottone per chiudere la sessione -->
            <input type="submit" class="bottoneChiudiSessione" id="bottoneChiudiSessione" name="bottoneChiudiSessione" value="Chiudi Sessione">

            <!-- Bottone per eliminare l'account -->
            <input type="submit" class="bottoneEliminaAccount" id="bottoneEliminaAccount" name="bottoneEliminaAccount" value="Elimina Account">
        </form>
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
