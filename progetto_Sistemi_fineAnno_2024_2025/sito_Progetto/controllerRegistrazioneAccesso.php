<?php
    // Questo e' un commento

    // Inizio o recupero i dati della sessione
    session_start();

    // Richiedo la funzione dentro il file che la contiene e la utilizzo prima di fare altre operazioni
    // poiche' cosi' recupero o inizializzo i dati
    require_once "include/includeFunzioniDiGestione/includeFunzioniInizializzazioneSessione.php";

    // Inizializzo i dati della sessione
    inizializzaSessione();
    
    // Includo i file che contengono funzioni che devo utilizzare

    // Se ho cliccato il bottone di accesso o di registrazione
    if(isset($_POST['submitDati'])){

        // variabile per mostrare all'utente eventuali errori
        $err = "";

        if($_POST['operazioneFatta'] == "-"){

            // Se non ho selezionato nessuna operazione, mostro un errore
            $err = "<br>Non hai inserito nessun dato, clicca il bottone per inserirli";
            header("Location: registrazione_accesso.php?err=".$err);
            exit();
        }

        // Se ho selezionato registrazione
        if($_POST['operazioneFatta'] == "registrazione"){
            
            // E non ho accettato i termini e le condizioni
            if($_POST['accettoTeminiCondizioni'] == false){

                // Se non ho accettato i termini e le condizioni, mostro un errore
                $err .= "<br>Non hai accettato i nostri termini e condizioni";
            }
        }

        if($_POST['residenza'] == "Seleziona una localita"){

            // Se non ho inserito la residenza, mostro un errore
            $err .= "<br>Non hai inserito una residenza accettabile";
        }

        // La password inserita non combacia
        if($_POST['password'] != $_POST['confermaPassword']){

            // Se la password non combacia, mostro un errore
            $err .= "<br>Hai inserito una password diversa da quella che hai inserito prima, reinseriscila";
        }
        
        // Una/tutte e due tra queste informazioni principali non va/vanno bene
        if($err == ""){

            // Creo una variabile per mostrare se va tutto a buon fine o no
            $risultato = false;

            // Includo le funzioni per controllare all'interno del database
            require_once "database/include_database/includeFunzioniDatabase.php";

            // Creo variabili per contenere i dati dell'utente
            $nome = (isset($_POST['nome'])) ? $_POST['nome'] : "";
            $cognome = (isset($_POST['cognome'])) ? $_POST['cognome'] : "";
            $dataNascita = (isset($_POST['dataNascita'])) ? $_POST['dataNascita'] : "";
            $sesso = (isset($_POST['sesso'])) ? $_POST['sesso'] : "";
            $residenza = (isset($_POST['residenza'])) ? $_POST['residenza'] : "";
            $username = (isset($_POST['username'])) ? $_POST['username'] : "";
            $mail = $_POST['mail']; // Richiesta necessaria
            $password = $_POST['password']; // Richiesta necessaria

            // Controllo se esistono o sono corretti i dati inseriti
            // risultato diventa true se esiste l'utente
            switch($_POST['operazioneFatta']){

                // L'utente ha fatto il login
                case "registrazione":
                    $risultato = creaNuovoUserDatabase($nome, $cognome, $dataNascita, $sesso, $residenza, $username, $mail, $password);
                    if($risultato == false){

                        // Se l'utente non e' stato creato, mostro un errore
                        $err = "<br>Non e' stato possibile creare l'utente a causa dell'esistenza della mail";
                    }
                    break;

                // L'utente ha fatto l'accesso
                case "accesso":
                    $risultato = recuperaAccessoDatabase($username, $mail, $password);
                    if($risultato == false){

                        // Se l'utente non e' stato trovato, mostro un errore
                        $err = "<br>Non e' stato possibile accedere poiche' non si sono trovati i dati";
                    }
                    break;

                // Caso improbabile se non impossibile
                default:
                    $err = "<br>Non hai inserito nessun dato, clicca il bottone per inserirli!";
            }

            // Controllo il risutato
            if($risultato == true){

                // L'utente e' stato trovato o creato
                // Salvo i dati dell'utente nella sessione (solo quelli che possono non essere sensibili)
                $_SESSION['username'] = $username;
                $_SESSION['mail'] = $mail;
                $_SESSION['accesso'] = true;
            }
        }
        
        // Se ci sono stati errori, li mostro
        if($err != ""){

            // Ritorno alla pagina di registrazione/accesso con gli errori
            header("Location: registrazione_accesso.php?err=".$err);
            exit();
        }
    
        // Se non ci sono stati errori, vado alla pagina del profilo
        header("Location: pagina_profilo.php");
        exit();
    }

?>