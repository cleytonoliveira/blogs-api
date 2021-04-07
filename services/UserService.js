const { User } = require('../models');

const { generateToken, validateToken } = require('../utils');

const createUser = async (displayName, email, password, image) => {
  await User.create({ displayName, email, password, image });

  const token = generateToken(email);

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

const removeUser = async (authorization) => {
  const email = await validateToken(authorization);

  const userRemoved = await User.destroy({
    where: { email },
  });

  return userRemoved;
};

module.exports = {
  getUserById,
  removeUser,
  getAllUser,
  createUser,
};
