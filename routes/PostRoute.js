const { Router } = require('express');

const { PostController } = require('../controller');

const post = Router();

post.post('/', PostController.createPost);

module.exports = post;
