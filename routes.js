const { Router } = require('express');

const UserRoute = require('./routes/UserRoute');
const LoginRoute = require('./routes/LoginRoute');

const router = Router();

router.use('/user', UserRoute);
router.use('/login', LoginRoute);

module.exports = router;
