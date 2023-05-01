const express = require("express")
const app = express()
const port = 3000

const path = require("path")
const pathName = path.join(__dirname, "templates")

const users = require("./users")

// ler o body
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// arquivos estáticos
app.use(express.static("public"))

app.use("/users", users)

app.use('/', (req, res) => {
    res.sendFile(`${pathName}/index.html`)
})

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`)
})