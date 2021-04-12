const { Router } = require('express');

const { UserController } = require('../controller');

const user = Router();

user.get('/', UserController.getAllUser);
user.get('/:id', UserController.getUserById);

user.post('/', UserController.createUser);

user.delete('/me', UserController.removeUser);

module.exports = user;
