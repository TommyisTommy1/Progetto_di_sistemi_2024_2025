// Ottieni gli elementi della finestra modale e i pulsanti
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

// Quando clicchi sul pulsante, la finestra modale si apre
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

// Quando clicchi sulla "x" per chiudere, la finestra modale si chiude
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

// Quando clicchi fuori dalla finestra modale, essa si chiude
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
