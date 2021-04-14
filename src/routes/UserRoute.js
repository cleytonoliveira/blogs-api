const { Router } = require('express');

const { UserController } = require('../controller');
const { userRegisterValidate, auth } = require('../middlewares');

const user = Router();

user.get('/',
  auth,
  UserController.getAllUser);
user.get('/:id',
  auth,
  UserController.getUserById);

user.post('/',
  userRegisterValidate,
  UserController.createUser);

user.delete('/me', UserController.removeUser);

module.exports = user;
