const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'basic.html'));
});
app.get('/users', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'users.html'));
});

app.listen(5000);
