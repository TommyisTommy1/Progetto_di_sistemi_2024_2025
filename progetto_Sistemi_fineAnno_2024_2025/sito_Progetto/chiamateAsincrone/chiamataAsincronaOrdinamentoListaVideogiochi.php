<?php
    // Questo e' un commento
    
    // Includo i file che contengono funzioni che devo utilizzare
    require_once "../include/includeFunzioniDiGestione/includeFunzioneOttieniVideogiochi.php";
    require_once "../include/includeArchivioVideogame/includeFunzioniArchivioVideogame.php";
    require_once "../include/includeIndex/includeFunzioniIndex.php";

    $ordinamento = $_POST["ordinamento"];
    $videogiochi = ottieniListaVideogiochi();

    $ris = "";

    switch($ordinamento){
        case "nome":
            $videogiochi = ordinaNome($videogiochi);
            break;
        case "random":
            $videogiochi = ordinaRandom($videogiochi);
           break;
        default:
            $ris .= "Errore: ordinamento non valido";
    }

    if($ris != ""){
        echo $ris;
        exit();
    }

    for($i = 0; $i < count($videogiochi); $i++){

        $percorso = ottieniPercorso($videogiochi[$i]);
        $ris .= "<a href='archivio_videogiochi/" . $percorso . "/" . $percorso . ".html'>";

        $ris .= "<div class='videogioco'>";
        // Poiche' non ci sono immagini viene un avviso di errore
        $ris .= "<img src='img/img_archivio_videogiochi/" . $videogiochi[$i] . "' alt='fotoVideogioco' class='imgVideogioco'>";
        $ris .= "<h3 class='titoloVideogioco'>" . $videogiochi[$i] . "</h3>";
        $ris .= "</div>";

        $ris .= "</a>";
    }

    echo $ris;
?>