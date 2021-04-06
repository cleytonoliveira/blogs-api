const Boom = require('@hapi/boom');
const { Op } = require('sequelize');
const { User } = require('../models');

module.exports = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: {
      [Op.and]: [
        { email },
        { password },
      ]
      ,
    },
  });

  if (!user) next(Boom.badRequest('Campos inválidos'));

  next();
};
