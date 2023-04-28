const fs = require("fs");

fs.unlink("arquivo.txt", function (error){
    if(error){
        console.log(error);
    }

    console.log("Arquivo deletado com sucesso!");
})