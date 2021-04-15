const Boom = require('@hapi/boom');
const rescue = require('express-rescue');

const { PostService } = require('../services');
const { CREATED, SUCCESS, NO_CONTENT } = require('../utils/dictionary');

const createPost = rescue(async (req, res) => {
  const { title, content } = req.body;
  const { email } = req;

  const post = await PostService.createPost(title, content, email);

  return res
    .status(CREATED)
    .json(post);
});

const getAllPost = rescue(async (_req, res) => {
  const posts = await PostService.getAllPost();

  return res
    .status(SUCCESS)
    .json(posts);
});

const getPostById = rescue(async (req, res) => {
  const { id } = req.params;

  const post = await PostService.getPostById(id);

  if (post.error) throw Boom.notFound(post.message);

  return res
    .status(SUCCESS)
    .json(post);
});

const updatePost = rescue(async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;
  const { userId } = req;

  const post = await PostService.updatePost(title, content, id, userId);

  if (post.error) throw Boom.unauthorized(post.message);

  return res
    .status(SUCCESS)
    .json(post);
});

const searchPost = rescue(async (req, res) => {
  const { q: searchTerm } = req.query;

  const search = await PostService.searchPost(searchTerm);

  return res
    .status(SUCCESS)
    .json(search);
});

const removePost = rescue(async (req, res) => {
  const { id } = req.params;
  const { userId } = req;

  const postRemoved = await PostService.removePost(id, userId);

  if (postRemoved.error) throw Boom.notFound(postRemoved.message);
  if (postRemoved.err) throw Boom.unauthorized(postRemoved.message);

  return res
    .status(NO_CONTENT)
    .json(postRemoved);
});

module.exports = {
  getPostById,
  updatePost,
  createPost,
  getAllPost,
  searchPost,
  removePost,
};
