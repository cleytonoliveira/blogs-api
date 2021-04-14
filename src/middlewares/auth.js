const { validateToken } = require('../utils');

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;

  validateToken(authorization, next);

  next();
};
