const express = require('express'); // import express; using express;
const { uuid } = require('uuidv4');

const server = express();

// middleware
server.use(express.json())

contatos = [];

server.get('/', function(request, response) {
    response.json(contatos);
})

server.get('/:id', function(request, response) {
    const id = request.params.id;
    response.json(id);
})

server.post('/', function(request, response) {
    const nome = request.body.nome;
    const telefone = request.body.telefone;

    contato = {
        id: uuid(),
        nome,
        telefone
    };

    contatos.push(contato);

    response.status(201).send();
})

server.listen(process.env.PORT || 3000);








// HTTP REST
// GET (obter um recurso JSON (JavaScript Object Notation)) = Read
// POST (adicionar um recurso) = Create
// PUT (atualizar um recurso) = Update
// DELETE (apagar um recurso) = Delete

// /?nome=Henrique (informações passadas pela url) - request.query
// produto/1 (informações passadas também pela url) - request.params
// corpo da mensagem - request.body (JSON)