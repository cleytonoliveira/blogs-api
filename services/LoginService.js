const { generateToken } = require('../utils');

const loginUser = async (email) => {
  const token = generateToken(email);

  return token;
};

module.exports = {
  loginUser,
};
