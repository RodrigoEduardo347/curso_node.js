const fs = require('fs');

console.log("Início");

fs.writeFile('arquivoAssincrono.txt', 'oi', (error) => {
    setTimeout(() => {
        console.log("Arquivo criado");
    }, 1000)
})

console.log("Fim");