const { Router } = require('express');

const {
  UserController,
  LoginController } = require('./controller');
const { auth } = require('./middlewares');

const router = Router();

router.post('/user', UserController.createUser);
router.post('/login',
  auth,
  LoginController.loginUser);

module.exports = router;
