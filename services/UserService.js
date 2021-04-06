const { User } = require('../models');

const { generateToken } = require('../utils');

const createUser = async (displayName, email, password, image) => {
  const user = await User.create({ displayName, email, password, image });

  const token = generateToken(user);

  return token;
};

module.exports = {
  createUser,
};
