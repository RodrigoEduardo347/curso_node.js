const express = require("express")
const app = express()
const port = 3000

const path = require("path")
const pathName = path.join(__dirname, "templates")

// ler o body
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/users/add', (req, res) => {
    res.sendFile(`${pathName}/userForm.html`)
})

app.post('/users/save', (req, res) => {
    console.log(req.body)

    const {name, age} = req.body

    console.log(`O usuário ${name} tem ${age} anos`)

    res.sendFile(`${pathName}/userForm.html`)
})

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