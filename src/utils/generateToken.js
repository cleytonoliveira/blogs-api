const jwt = require('jsonwebtoken');

module.exports = (email, userId) => {
  const { TOKEN_SECRET } = process.env;

  const secret = TOKEN_SECRET || 'mySecretToken';

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const user = {
    email,
    userId,
  };

  const token = jwt.sign({ data: user }, secret, jwtConfig);
  return token;
};
