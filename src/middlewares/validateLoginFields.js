const Boom = require('@hapi/boom');
const Joi = require('@hapi/joi');

const validateRequest = (req, next, schema) => {
  const { error, value } = schema.validate(req.body);

  if (error) error.details.map((err) => next(Boom.badRequest(err.message)));

  req.body = value;

  next();
};

module.exports = (req, _res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().empty().required(),
    password: Joi.string().min(6).empty().required(),
  });
  validateRequest(req, next, schema);
};
