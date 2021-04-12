const { Router } = require('express');

const { PostController } = require('../controller');

const post = Router();

post.post('/', PostController.createPost);

post.get('/', PostController.getAllPost);
post.get('/search', PostController.searchPost);
post.get('/:id', PostController.getPostById);

post.put('/:id', PostController.updatePost);

module.exports = post;
