const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.render('index.html');
});

app.post('/consulta', function (req, res) {
    let dados_pessoais = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        data_nascimento: req.body.data_nascimento,
        endereco: req.body.endereco,
        cidade: req.body.cidade,
        uf: req.body.uf,
        cep: req.body.cep,
        email: req.body.email,
        telefone: req.body.telefone
    };

    let dados_consulta = {
        especialidade: req.body.especialidade,
        data_consulta: req.body.data_consulta,
        hora_consulta: req.body.hora_consulta,
        antibiotico: req.body.antibiotico,
        anti_inflamatorio: req.body.anti_inflamatorio,
        informacao_adicional: req.body.informacao_adicional
    }

    let erros = [];

    for (const atributo in dados_pessoais) {
        const valor = dados_pessoais[atributo];
        if(valor == ""){
            erros.push({nome_atributo: atributo, mensagem: "não pode ser vazio!"});
        }
    }

    res.render('consulta.html', {dados_pessoais, dados_consulta, erros});
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log('app rodando na porta ' + PORT);
});