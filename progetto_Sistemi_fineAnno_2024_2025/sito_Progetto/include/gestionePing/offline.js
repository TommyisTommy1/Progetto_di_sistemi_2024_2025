
// Funzione per il ping della pagina PHP
function generaPing(paginaPhpPing, tempoPing){
    
    // Inserisco un intervallo per il ping della pagina PHP
    setInterval(() => {
        
        // Esegui il ping della pagina PHP
        fetch(
            (
                paginaPhpPing + ".php"
            ), 
            
            {
                method: "POST"
            }
        );
    }, tempoPing * 1000); // ogni x secondi
}
