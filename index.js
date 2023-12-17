const express = require('express')
const app = express()


// Metodo HTTP
// "get" pega algo para o usuário
// é uma função callback porque executa por tras do get
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)