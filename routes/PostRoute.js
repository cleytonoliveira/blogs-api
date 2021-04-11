const { Router } = require('express');

const { PostController } = require('../controller');

const post = Router();

post.post('/', PostController.createPost);

post.get('/', PostController.getAllPost);
post.get('/:id', PostController.getPostById);

module.exports = post;
