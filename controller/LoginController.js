const rescue = require('express-rescue');

const { LoginService } = require('../services');
const { SUCCESS } = require('../dictionary');

const loginUser = rescue(async (req, res) => {
  const { email, password } = req.body;

  const token = await LoginService.loginUser(email, password);

  return res
    .status(SUCCESS)
    .json({ token });
});

module.exports = {
  loginUser,
};
