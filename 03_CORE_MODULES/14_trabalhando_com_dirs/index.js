const fs = require("fs")

if(!fs.existsSync("./minhapasta")){
    console.log("Minha pasta não existe!")
    fs.mkdirSync("minhapasta")
}

if(fs.existsSync("./minhapasta")){
    console.log("Minha pasta existe")
}