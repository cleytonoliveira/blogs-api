const rescue = require('express-rescue');

const { UserService } = require('../services');
const { CREATED, SUCCESS } = require('../dictionary');

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

module.exports = {
  getAllUser,
  createUser,
};
