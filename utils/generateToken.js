const jwt = require('jsonwebtoken');

module.exports = (email) => {
  const { TOKEN_SECRET } = process.env;

  const secret = TOKEN_SECRET || 'mySecretToken';

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: email }, secret, jwtConfig);
  return token;
};
