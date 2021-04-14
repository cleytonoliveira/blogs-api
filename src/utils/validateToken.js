const Boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');

module.exports = (token, next) => {
  const { TOKEN_SECRET } = process.env;

  const secret = TOKEN_SECRET || 'mySecretToken';

  if (!token) next(Boom.unauthorized('Token não encontrado'));

  try {
    return jwt.verify(token, secret);
  } catch (err) {
    next(Boom.unauthorized('Token expirado ou inválido'));
  }
};
