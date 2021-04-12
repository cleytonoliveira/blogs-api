const bodyParser = require('body-parser');
const express = require('express');
require('dotenv/config');

const app = express();

const routes = require('./routes');
const { error } = require('./middlewares');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(bodyParser.json());
app.use(routes);
app.use(error);

module.exports = app;
