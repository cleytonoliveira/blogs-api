const { Router } = require('express');

const { PostController } = require('../controller');
const { auth, validatePostFields } = require('../middlewares');

const post = Router();

post.post('/',
  auth,
  validatePostFields,
  PostController.createPost);

post.get('/',
  auth,
  PostController.getAllPost);
post.get('/search', PostController.searchPost);
post.get('/:id',
  auth,
  PostController.getPostById);

post.put('/:id', PostController.updatePost);

post.delete('/:id', PostController.removePost);

module.exports = post;
