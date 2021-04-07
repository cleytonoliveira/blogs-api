const { User } = require('../models');

module.exports = async (email) => {
  const { dataValues } = await User.findOne({
    where: { email },
  });

  return dataValues.id;
};
