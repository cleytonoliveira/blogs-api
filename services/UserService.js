const { User } = require('../models');

const { generateToken } = require('../utils');

const createUser = async (displayName, email, password, image) => {
  const user = await User.create({ displayName, email, password, image });

  const token = generateToken(user);

  return token;
};

const getAllUser = async () => {
  const users = await User.findAll();

  return users;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);

  return user;
};

module.exports = {
  getUserById,
  getAllUser,
  createUser,
};
