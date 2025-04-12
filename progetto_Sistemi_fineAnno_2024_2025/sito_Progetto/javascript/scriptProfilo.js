

document.getElementById("bottoneMostraPassword").addEventListener("click", function() {
    let operazione = document.getElementById("campoPasswordUtente");
    
    if (operazione.type === "password") {
        operazione.type = "text";
        bottoneMostraPassword.textContent = "Nascondi Password";
    } else {
        operazione.type = "password";
        bottoneMostraPassword.textContent = "Mostra Password";
    }
});