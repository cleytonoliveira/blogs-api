const rescue = require('express-rescue');

const {
  CREATED,
  SUCCESS,
  NO_CONTENT } = require('../utils/dictionary');

const { UserService } = require('../services');

const createUser = rescue(async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const token = await UserService.createUser(displayName, email, password, image);

  return res
    .status(CREATED)
    .json({ token });
});

const getAllUser = rescue(async (_req, res) => {
  const users = await UserService.getAllUser();

  return res
    .status(SUCCESS)
    .json(users);
});

const getUserById = rescue(async (req, res) => {
  const { id } = req.params;

  const user = await UserService.getUserById(id);
  return res
    .status(SUCCESS)
    .json(user);
});

const removeUser = rescue(async (req, res) => {
  const { authorization } = req.headers;

  const userRemoved = await UserService.removeUser(authorization);

  return res
    .status(NO_CONTENT)
    .json(userRemoved);
});

module.exports = {
  getUserById,
  removeUser,
  getAllUser,
  createUser,
};
