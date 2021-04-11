const rescue = require('express-rescue');

const { PostService } = require('../services');
const { CREATED, SUCCESS } = require('../dictionary');

const createPost = rescue(async (req, res) => {
  const { title, content } = req.body;
  const { authorization } = req.headers;

  const post = await PostService.createPost(title, content, authorization);

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

  return res
    .status(SUCCESS)
    .json(post);
});

const updatePost = rescue(async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;

  const post = await PostService.updatePost(title, content, id);

  return res
    .status(SUCCESS)
    .json(post);
});

module.exports = {
  getPostById,
  updatePost,
  createPost,
  getAllPost,
};
