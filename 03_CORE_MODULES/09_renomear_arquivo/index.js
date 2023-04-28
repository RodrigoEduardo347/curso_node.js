const fs = require("fs");

const oldName = "arquivo.txt";
const newName = "novo.txt";

fs.rename(oldName, newName, (error)=>{
    if(error){
        console.log(error);
    }

    console.log(`O arquivo "${oldName}" foi renomeada para "${newName}".`);
})