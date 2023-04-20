const fs = require('fs');

console.log("Antes de criar o arquivo!");
fs.writeFileSync('arquivo.txt', 'oi');
console.log("Depois de criar o arquivo!");