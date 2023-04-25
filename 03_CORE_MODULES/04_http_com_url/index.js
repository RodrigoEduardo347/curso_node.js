const http = require("http");

const port = 3000;

const server = http.createServer((req, res)=> {
    const urlInfor = require("url").parse(req.url, true);
    const name = urlInfor.query.name;

    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    
    if(!name){
        res.end("<h1>Preencha o seu nome:<h1/><form method='GET'><input type='text' name='name'/> <button type='submit'>Enviar nome</button></form>")
    } else {
        res.end(`<h1>Oi ${name}</h1>`);
    }

});

server.listen(port, () => {
    console.log(`Server rodando na porta ${port}.`);
})