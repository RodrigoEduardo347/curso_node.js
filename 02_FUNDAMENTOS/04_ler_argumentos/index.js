// nome

console.log(process.argv);

const args = process.argv.slice(2);
console.log("Args: ", args);

const nome = args[0].split('=')[1];
const idade = args[1].split('=')[1];

console.log(`Olá! Meu nome é ${nome} e tenho ${idade} anos!`);