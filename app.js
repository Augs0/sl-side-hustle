const express = require('express');
const { getUsers, postUser } = require('./controllers/users.controllers');
const connection = require('./db');
connection();

const app = express();

app.use(express.json())

app.get('/api/users', getUsers);

app.post('/api/users', postUser);

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).send({msg: 'bad request'});
});

module.exports = app;