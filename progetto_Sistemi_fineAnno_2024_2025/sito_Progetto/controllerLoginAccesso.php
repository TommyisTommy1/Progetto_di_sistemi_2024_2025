<?php
    // Questo e' un commento

    // Inizio o recupero i dati della sessione
    session_start();

    // Includo i file che contengono funzioni che devo utilizzare

    // Richiedo la funzione dentro il file che la contiene e la utilizzo prima di fare altre operazioni
    // poiche' cosi' recupero o inizializzo i dati
    require_once "include/includeFunzioniDiGestione/includeFunzioniInizializzazioneSessione.php";

    // Inizializzo i dati della sessione
    inizializzaSessione();

    $err = "";
    if(isset($_POST['submit'])){
        if($_POST['accettoTeminiCondizioni'] == false){
            $err .= "<br>Non hai accettato i nostri termini e condizioni";
        }

        if($_POST['password'] != $_POST['confermaPassword']){
            $err .= "<br>Hai inserito una password diversa da quella che hai inserito prima, reinseriscila";
        }
        
        if($err != ""){

            $risultato = false;

            // Controllo se esistono o sono corretti i dati inseriti
            switch($_POST['operazioneFatta']){
                case "login":
                    creaNuovoUser($_POST[''], $_POST[''], $_POST[''], $_POST[''], $_POST[''], $_POST[''], $_POST[''], $_POST[''], $_POST['']);
                    $risultato = true;
                    break;

                case "accesso":
                    recuperaAccesso($_POST[''], $_POST[''], $_POST['']);
                    break;

                default:
                    $err = "Non hai inserito nessun dato, clicca il bottone per inserirli";
            }

            if($risultato == false){
                
                // I dati inseriti non sono corretti
                $err .= "<br>Non sono stati trovati utenti con le tue credenziali nel nostro database.";
            }else{
                
                // I dati inseriti sono giusti

            }
        }
    }

    if($err != ""){
        header("Location: login_accesso.php?err=".$err);
        exit();
    }

    header("Location: pagina_profilo.php");
?>

<?php
    function creaNuovoUser($nome, $cognome, $dataNascita, $sesso, $residenza, $username, $mail, $password){

    }

    function recuperaAccesso($username, $mail, $password){

    }
?>