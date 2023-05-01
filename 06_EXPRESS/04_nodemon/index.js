const express = require("express")
const app = express()
const port = 3000

const path = require("path")
const pathName = path.join(__dirname, "templates")

app.use('/', (req, res) => {
    res.sendFile(`${pathName}/index.html`)
})

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`)
})