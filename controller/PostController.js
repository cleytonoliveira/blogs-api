const rescue = require('express-rescue');

const { PostService } = require('../services');
const { CREATED } = require('../dictionary');

const createPost = rescue(async (req, res) => {
  const { title, content } = req.body;
  const { authorization } = req.headers;

  const post = await PostService.createPost(title, content, authorization);

  return res
    .status(CREATED)
    .json(post);
});

module.exports = {
  createPost,
};
