const Boom = require('@hapi/boom');

const { BAD_IMPLEMENTATION } = require('../dictionary');

module.exports = (err, _req, res, _next) => {
  if (Boom.isBoom(err)) {
    const { statusCode, payload } = err.output;

    return res
      .status(statusCode)
      .json({ message: payload.message });
  }

  return res
    .status(BAD_IMPLEMENTATION)
    .json({ message: err.message });
};
