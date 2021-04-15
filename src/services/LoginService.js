const { generateToken } = require('../utils');

const loginUser = async (email, userId) => {
  const token = generateToken(email, userId);

  return token;
};

module.exports = {
  loginUser,
};
