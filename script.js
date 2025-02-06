const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello Home')
})

app.get('/profile/:username', function (req, res) {
    res.send(`Hello ${req.params.username}`)
  })

app.listen(3000)