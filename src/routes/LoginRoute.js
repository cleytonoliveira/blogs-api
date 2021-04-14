const { Router } = require('express');

const { LoginController } = require('../controller');
const { validateUserDatabase, validateLoginFields } = require('../middlewares');

const login = Router();

login.post('/',
  validateLoginFields,
  validateUserDatabase,
  LoginController.loginUser);

module.exports = login;
