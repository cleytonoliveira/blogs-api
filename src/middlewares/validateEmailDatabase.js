const Boom = require('@hapi/boom');

const { User } = require('../database/models');

module.exports = async (req, _res, next) => {
  const { email } = req.body;

  const isEmailRegistered = await User.findOne({ where: { email } });

  if (isEmailRegistered) return next(Boom.conflict('Usuário já existe'));

  next();
};
