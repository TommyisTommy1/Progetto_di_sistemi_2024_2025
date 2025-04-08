let bottoneCambiaOperazione = document.getElementById('bottoneCambiaOperazione');

bottoneCambiaOperazione.addEventListener('click', function() {
    daMostrare = "";
    if(operazione % 2 == 0){
        operazione++;
        daMostrare = ottieniLogin();
        document.getElementById("operazioneFatta") = "login";
        document.getElementById("parteFinale").classList.remove("parteFinaleStatic");
    }else{
        operazione--;
        daMostrare = ottieniAccesso();
        document.getElementById("operazioneFatta") = "accesso";
        document.getElementById("parteFinale").classList.add("parteFinaleStatic");
    }

    daMostrare += "<input type='hidden' name=" + operazioneFatta + " />";
    document.getElementById("dati").innerHTML = daMostrare;
});