const { Router } = require('express');

const {
  UserController,
  LoginController } = require('./controller');
const { auth } = require('./middlewares');

const router = Router();

router.get('/user', UserController.getAllUser);
router.get('/user/:id', UserController.getUserById);
router.post('/user', UserController.createUser);
router.post('/login',
  auth,
  LoginController.loginUser);

module.exports = router;
