const express = require("express")
const cors = require("cors")
const app = express()
const spawn = require('child_process').spawn
const process = spawn('python', ['./hello.py'])

app.use(cors())
var response = ""
process.stdout.on('data', (data) => {
    response = data
})
app.get("/api/data", (req, res) => {

    res.send(response)
})

app.listen(3000, () => console.log('API listening on 3000'))