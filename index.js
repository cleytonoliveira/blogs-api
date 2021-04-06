const bodyParser = require('body-parser');
const express = require('express');
require('dotenv/config');

const { PORT } = process.env || 3000;
const app = express();

const routes = require('./routes');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(bodyParser.json());
app.use(routes);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
