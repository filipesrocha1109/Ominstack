// 1º passo- iniciar servidor
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

// criar aplicação

const app = express();

mongoose.connect('mongodb+srv://filipe:hahahaeu@cluster0-lhvox.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// GET, POST, PUT, DELETE

// definir que app ira usar formato JSON
app.use(express.json());
app.use(routes);

//rotas = endereco+ param

// req.query = acessar parametros (para filtros)
// req.params = acessar reoute params(para deição, delete )
// req.body = acessar corpo da requisição(para criação, edição)


// ROTAS ENCIADAS ATRAVÉS DE ROUTES.JS

// porta a ser ouvida


app.listen(3333);