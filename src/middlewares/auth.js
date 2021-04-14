const { validateToken } = require('../utils');

module.exports = (req, _res, next) => {
  const { authorization: token } = req.headers;

  validateToken(req, token, next);

  next();
};
