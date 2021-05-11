const express = require('express'); // import express; using express;
const server = express();
const cors = require('cors');

const database = require('./database');

// middleware
server.use(cors())
server.use(express.json())

// localhost:3000/
server.get('/', async function(request, response) {
    const contatos = await database.read();
    response.json(contatos);
})

// localhost:3000/1
server.get('/:id', async function(request, response) {
    const id = request.params.id;
    const contato = await database.find(id);
    response.json(contato);
})

// localhost:3000/
server.post('/', async function(request, response) {
    const nome = request.body.nome;
    const telefone = request.body.telefone;

    const result = await database.create(nome, telefone);
    response.status(200).json({id: result, nome, telefone});
})

server.put('/:id', async function(request, response) {
    const id = request.params.id;
    const nome = request.body.nome;
    const telefone = request.body.telefone;

    await database.update(id, nome, telefone);
    response.status(200).send();
})

server.delete('/:id', async function(request, response) {
    const id = request.params.id;

    await database.delete(id);
    response.status(200).send();
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