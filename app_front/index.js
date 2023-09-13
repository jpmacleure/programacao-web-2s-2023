const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.post("/", function (req, res) {
    let nome = "Jota";
    res.render("index.html", {nome});
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log("app rodando na porta "+PORT);
});