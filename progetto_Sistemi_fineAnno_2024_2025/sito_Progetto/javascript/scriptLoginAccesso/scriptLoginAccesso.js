let bottoneCambiaOperazione = document.getElementById('bottoneCambiaOperazione');

bottoneCambiaOperazione.addEventListener('click', function() {
    console.log("cliccato bottone");
    daMostrare = "";
    if(operazione % 2 == 0){
        operazione++;
        console.log("cliccato bottone");
        daMostrare = ottieniLogin();
    }else{
        operazione--;
        console.log("cliccato bottone");
        daMostrare = ottieniAccesso();
    }

    document.getElementById("dati").innerHTML = daMostrare;
});