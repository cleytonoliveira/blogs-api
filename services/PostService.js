const { Op } = require('sequelize');

const { BlogPost, User } = require('../models');
const { validateToken, searchUserId } = require('../utils');

const createPost = async (title, content, authorization) => {
  const email = await validateToken(authorization);

  const userId = await searchUserId(email);

  const post = await BlogPost.create({ title, content, userId });

  return post;
};

const getAllPost = async () => {
  const posts = await BlogPost.findAll({ include: {
    model: User, as: 'user',
  } });

  return posts;
};

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, { include: {
    model: User, as: 'user', attributes: { exclude: ['password'] },
  } });

  return post;
};

const updatePost = async (title, content, id) => {
  const { userId } = await BlogPost.update(
    { title, content },
    {
      where: { id },
    },
  )
    .then(() => BlogPost.findByPk(id));

  return {
    title,
    content,
    userId,
  };
};

const searchPost = async (searchTerm) => {
  const search = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: {
          [Op.substring]: `%${searchTerm}%` },
        },
        { content: {
          [Op.substring]: `%${searchTerm}%` },
        },
      ],
    },
    include: {
      model: User, as: 'user', attributes: { exclude: ['password'] },
    },
  });

  return search;
};

const removePost = async (id) => {
  const postRemoved = await BlogPost.destroy({
    where: { id },
  });

  return postRemoved;
};

module.exports = {
  getPostById,
  updatePost,
  createPost,
  getAllPost,
  searchPost,
  removePost,
};
