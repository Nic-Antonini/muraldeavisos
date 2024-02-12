const express = require('express');
const bodyParser = require('body-parser');
const posts = require('../model/posts');
const router = express.Router();
const cors = require('cors');
const options = {
    origin: 'https://nic-antonini.github.io/muraldeavisos'
}

router.use(cors(options));

router.get('/all', (req, res) => {
    res.json(JSON.stringify(posts.getAll()));
});
//REQUISIÇÃO GET, PARA VER SE OS DADOS ENVIADOS DO USUÁRIO FORAM ARMAZENADOS.

router.post('/new', bodyParser.json(), (req, res) => {
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description)
    res.send("POST ADDED :)")
});
//REQUISIÇÃO POST, PARA O USUÁRIO ENVIAR ALGO AO SERVIDOR.

module.exports = router;
