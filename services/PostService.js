const { BlogPost } = require('../models');
const { validateToken, searchUserId } = require('../utils');

const createPost = async (title, content, authorization) => {
  const email = await validateToken(authorization);

  const userId = await searchUserId(email);

  const post = await BlogPost.create({ title, content, userId });

  return post;
};

module.exports = {
  createPost,
};
