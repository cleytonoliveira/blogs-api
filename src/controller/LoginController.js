const rescue = require('express-rescue');

const { LoginService } = require('../services');
const { SUCCESS } = require('../utils/dictionary');

const loginUser = rescue(async (req, res) => {
  const { email } = req.body;
  const { userId } = req;

  const token = await LoginService.loginUser(email, userId);

  return res
    .status(SUCCESS)
    .json({ token });
});

module.exports = {
  loginUser,
};
