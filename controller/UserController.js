const rescue = require('express-rescue');

const { UserService } = require('../services');
const { CREATED } = require('../dictionary');

const createUser = rescue(async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const token = await UserService.createUser(displayName, email, password, image);

  return res
    .status(CREATED)
    .json({ token });
});

module.exports = {
  createUser,
};
