const express = require('express');
const fs = require('fs');
const app = express();

app.get('/plataformes', (req, res) => {
    fs.readFile('./files/json/plataformes.json', 'utf8' , (err, data) => {
        res.send(data);
    });
});

app.get('/img/plataformes/:id', (req, res) => {
    res.sendFile(`files/imgs/plataformes/${req.params.id}.png`, {root: __dirname});
});

app.get('/categories', (req, res) => {
    fs.readFile('./files/json/categories.json', 'utf8' , (err, data) => {
        res.send(data);
    });
});

app.listen(3000, () => console.log('Servidor iniciat'));