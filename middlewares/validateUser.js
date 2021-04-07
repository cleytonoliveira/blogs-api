const { Op } = require('sequelize');
const Boom = require('@hapi/boom');

const { User } = require('../models');

module.exports = async (req, _res, next) => {
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
