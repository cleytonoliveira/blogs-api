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

const getAllPost = rescue(async (req, res) => {
  const posts = await PostService.getAllPost();

  return res
    .status(SUCCESS)
    .json(posts);
});

module.exports = {
  createPost,
  getAllPost,
};
