const calculadora = require('../calculadora/calculadora');

function indexCalculadora(req, res) {
    res.render('index.html');
}

function calcular(req, res) {
    res.send(calculadora.somar());
}

module.exports = {
    indexCalculadora,
    calcular
};