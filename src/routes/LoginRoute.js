const { Router } = require('express');

const { LoginController } = require('../controller');
const { validateUser } = require('../middlewares');

const login = Router();

login.post('/',
  validateUser,
  LoginController.loginUser);

module.exports = login;
