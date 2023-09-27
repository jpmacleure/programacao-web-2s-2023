const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extended: true}));

app.get('/', function (req, res) {
    let usuario = {
        nome: "Jota",
        telefone: 123123 
    };

    res.render('index.html', {usuario});
});

app.post('/dados', function (req, res) {
    let usuario = {
        nome: req.body.nome,
        telefone: req.body.telefone 
    };
    res.render('dados.html', {usuario});
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log('app rodando na porta ' + PORT);
});