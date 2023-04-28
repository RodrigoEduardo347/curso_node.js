const path = require("path");

// path absoluto
console.log(path.resolve("arquivo.txt"));

// formar path
const midFolder = "relatorios"
const filename = "rodrigo.txt"

console.log("Final path 1: ", path.join("/", "arquivos", midFolder, filename))

const finalPath2 = path.join(__dirname, "./teste/file.txt")
console.log(`Final path 2: ${finalPath2}`)