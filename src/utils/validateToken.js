const Boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');

module.exports = (req, token, next) => {
  const { TOKEN_SECRET } = process.env;

  const secret = TOKEN_SECRET || 'mySecretToken';

  if (!token) next(Boom.unauthorized('Token não encontrado'));

  try {
    const { data } = jwt.verify(token, secret);
    req.email = data;
  } catch (err) {
    next(Boom.unauthorized('Token expirado ou inválido'));
  }
};
