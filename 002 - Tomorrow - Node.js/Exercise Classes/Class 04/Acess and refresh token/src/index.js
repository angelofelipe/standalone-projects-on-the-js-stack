const express = require('express')
const cookieParser = require("cookie-parser")
const app = express()

app.use(cookieParser())


app.get("/", (req, res) => {
    const token = "meu cookie"
    
    res.cookie("token", token)

    res.status(200).send({token})
})

app.get("/cookie", (req, res) => {
    res.status(200).send(req.cookies)
    console.log(req.cookies)
})

app.listen(3000, () => {
    console.log("Server rodando")
})