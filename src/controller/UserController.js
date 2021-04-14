const rescue = require('express-rescue');
const Boom = require('@hapi/boom');

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

const getUserById = rescue(async (req, res, next) => {
  const { id } = req.params;

  const user = await UserService.getUserById(id);

  if (user.error) return next(Boom.notFound(user.message));

  return res
    .status(SUCCESS)
    .json(user);
});

const removeUser = rescue(async (req, res) => {
  const { email } = req;

  const userRemoved = await UserService.removeUser(email);

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
