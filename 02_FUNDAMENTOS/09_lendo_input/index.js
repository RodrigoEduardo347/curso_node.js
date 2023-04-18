const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readLine.question('Qual a sua linguagem favorita? ', (language)=>{
    console.log(`A minha linguagem favorita é ${language}`)
    readLine.close()
})