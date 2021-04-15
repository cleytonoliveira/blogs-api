const Boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');

module.exports = (req, token, next) => {
  const { TOKEN_SECRET } = process.env;

  const secret = TOKEN_SECRET || 'mySecretToken';

  if (!token) return next(Boom.unauthorized('Token não encontrado'));

  try {
    const { data } = jwt.verify(token, secret);
    req.email = data.email;
    req.userId = data.userId;
  } catch (err) {
    throw next(Boom.unauthorized('Token expirado ou inválido'));
  }
};
