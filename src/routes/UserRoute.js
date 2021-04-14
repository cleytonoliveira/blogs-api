const { Router } = require('express');

const { UserController } = require('../controller');
const { userRegisterValidate } = require('../middlewares');

const user = Router();

user.get('/', UserController.getAllUser);
user.get('/:id', UserController.getUserById);

user.post('/',
  userRegisterValidate,
  UserController.createUser);

user.delete('/me', UserController.removeUser);

module.exports = user;
