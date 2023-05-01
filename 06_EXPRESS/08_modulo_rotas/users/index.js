const express = require("express")
const router = express.Router()

const port = 3000

const path = require("path")
const pathName = path.join(__dirname, "../templates")

router.use('/add', (req, res) => {
    res.sendFile(`${pathName}/userForm.html`)
})

router.post('/save', (req, res) => {
    console.log(req.body)

    const {name, age} = req.body

    console.log(`O usuário ${name} tem ${age} anos`)

    res.sendFile(`${pathName}/userForm.html`)
})

router.get('/:id', (req, res) => {
    const id = req.params.id

    // leitura da tabela user, resgatar um usuário no banco
    console.log(`Estamos buscando pelo usuário ${id}`)

    res.sendFile(`${pathName}/users.html`)
})

module.exports = router