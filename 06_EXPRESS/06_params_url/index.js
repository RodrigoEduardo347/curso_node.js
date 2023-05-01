const express = require("express")
const app = express()
const port = 3000

const path = require("path")
const pathName = path.join(__dirname, "templates")

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    // leitura da tabela user, resgatar um usuário no banco
    console.log(`Estamos buscando pelo usuário ${id}`)

    res.sendFile(`${pathName}/users.html`)
})

app.use('/', (req, res) => {
    res.sendFile(`${pathName}/index.html`)
})

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`)
})