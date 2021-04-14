const userRegisterValidate = require('./userRegisterValidate');
const validateLoginFields = require('./validateLoginFields');
const validateUserDatabase = require('./validateUserDatabase');
const error = require('./error');
const auth = require('./auth');

module.exports = {
  userRegisterValidate,
  validateLoginFields,
  validateUserDatabase,
  error,
  auth,
};
