const express = require('express'); // import express; using express;
const server = express();

const database = require('./database');

// middleware
server.use(express.json())

// localhost:3000/
server.get('/', async function(request, response) {
    const contatos = await database.read();
    response.json(contatos);
})

// localhost:3000/123o9123-123-1-1231233
// server.get('/:id', function(request, response) {
//     const id = request.params.id;
//     const result = contatos.filter(contato => contato.id ==  id);
//     response.json(result);
// })

// localhost:3000/
server.post('/', async function(request, response) {
    const nome = request.body.nome;
    const telefone = request.body.telefone;

    const result = await database.create(nome, telefone);
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