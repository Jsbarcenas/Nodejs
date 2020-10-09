const express = require ('express');
const bodyParser = require ('body-parser');
const router = require('./components/message/network')

var app = express();
app.use(bodyParser.json());
app.use(router.router);


app.listen(3000);
console.log('La aplicación está escuchando en HTTP://localhost:3000');