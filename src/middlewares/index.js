const userRegisterValidate = require('./userRegisterValidate');
const validateLoginFields = require('./validateLoginFields');
const validateUserDatabase = require('./validateUserDatabase');
const error = require('./error');

module.exports = {
  userRegisterValidate,
  validateLoginFields,
  validateUserDatabase,
  error,
};
