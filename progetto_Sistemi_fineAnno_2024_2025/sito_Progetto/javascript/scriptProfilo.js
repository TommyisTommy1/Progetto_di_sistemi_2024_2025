

document.getElementById("bottoneMostraPassword").addEventListener("click", function() {
    if (document.getElementById("campoPasswordUtente").type === "password") {
        inputPassword.type = "text";
        bottoneMostraPassword.textContent = "Nascondi Password";
    } else {
        inputPassword.type = "password";
        bottoneMostraPassword.textContent = "Mostra Password";
    }
});