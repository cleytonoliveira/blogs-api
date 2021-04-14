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
    title: Joi.string().required(),
    content: Joi.string().required(),
  });
  return validateRequest(req, next, schema);
};
