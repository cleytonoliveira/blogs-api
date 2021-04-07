const { Router } = require('express');

const UserRoute = require('./routes/UserRoute');
const LoginRoute = require('./routes/LoginRoute');
const PostRoute = require('./routes/PostRoute');

const router = Router();

router.use('/user', UserRoute);
router.use('/login', LoginRoute);
router.use('/post', PostRoute);

module.exports = router;
