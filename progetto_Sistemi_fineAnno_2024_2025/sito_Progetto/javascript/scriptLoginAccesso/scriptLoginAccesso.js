let bottoneCambiaOperazione = document.getElementById('bottoneCambiaOperazione');

bottoneCambiaOperazione.addEventListener('click', function() {
    daMostrare = "";
    if(operazione % 2 == 0){
        operazione++;
        daMostrare = ottieniLogin();
        operazioneFatta = "login";
    }else{
        operazione--;
        daMostrare = ottieniAccesso();
        operazioneFatta = "accesso";
    }

    daMostrare += "<input type='hidden' name=" + operazioneFatta + " />";
    document.getElementById("dati").innerHTML = daMostrare;

    document.getElementById("parteFinale").classList.remove("parteFinaleStatic");
});