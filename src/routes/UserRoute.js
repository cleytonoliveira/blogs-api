const { Router } = require('express');

const { UserController } = require('../controller');
const { userRegisterValidate, auth, validateEmailDatabase } = require('../middlewares');

const user = Router();

user.get('/',
  auth,
  UserController.getAllUser);
user.get('/:id',
  auth,
  UserController.getUserById);

user.post('/',
  userRegisterValidate,
  validateEmailDatabase,
  UserController.createUser);

user.delete('/me',
  auth,
  UserController.removeUser);

module.exports = user;
