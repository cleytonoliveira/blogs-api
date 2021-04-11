const { Router } = require('express');

const { PostController } = require('../controller');

const post = Router();

post.post('/', PostController.createPost);

post.get('/', PostController.getAllPost);

module.exports = post;
