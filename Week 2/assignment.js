const express = require('express');

const app = express();

app.use('/', (request, response, next) => {
    console.log("Hello there");
    next();
});

app.use('/users', (request, response, next) => {
    console.log("General Kenobi");
    response.send("<h1>Hello There, General Kenobi</h1>");
});

app.listen(5000);