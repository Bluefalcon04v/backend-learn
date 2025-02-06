const express = require('express')
const app = express()

app.use(function(req, res, next) {
    console.log('Running before Express JS' );
    next();
});

app.get('/', function (req, res) {
  res.send('Helloasdawsd')
})

app.get('/xyz', function (req, res) {
    res.send('Hello XYZ')
  })

app.listen(3000)