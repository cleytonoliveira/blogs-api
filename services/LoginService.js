const { generateToken } = require('../utils');

const loginUser = async (email, password) => {
  const user = { email, password };

  const token = generateToken(user);

  return token;
};

module.exports = {
  loginUser,
};
