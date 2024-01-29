const express = require("express");
const app = express();

app.use(express.static(__dirname))

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/html/index.html");
});

app.get('/curriculo', function(req, res) {
    res.sendFile(__dirname + "/html/curriculum.html");
});

app.get('/contato', function(req, res) {
    res.sendFile(__dirname + "/html/contact.html");
});

app.listen(80, () => 
console.log('Servidor iniciado na porta 80')
);
