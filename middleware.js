const express = require('express');
const app = express();

// This will run every time route will be executed
app.use(function(req, res, next) {
    console.log('Running before Express JS MiddleWare 1');
    next();
});

app.use(function(req, res, next) {
    console.log('Running before Express JS MiddleWare 2');
    next();
});

app.get('/middleware', function(req, res) {
    res.send('Hello Middle Ware!');
})
app.listen(3000)
