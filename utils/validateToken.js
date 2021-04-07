const jwt = require('jsonwebtoken');

module.exports = async (authorization) => {
  const { TOKEN_SECRET } = process.env;

  const secret = TOKEN_SECRET || 'mySecretToken';

  const { data: email } = await jwt.verify(authorization, secret);

  return email;
};
