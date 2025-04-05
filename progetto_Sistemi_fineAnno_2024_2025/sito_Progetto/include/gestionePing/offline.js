
function generaPing(paginaPhpPing, tempoPing){
    
    setInterval(() => {
        
        // Esegui il ping della pagina PHP
        fetch((paginaPhpPing + ".php"), { 
            method: "POST"
        });
    }, tempoPing * 1000); // ogni x secondi
}
