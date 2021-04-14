const userRegisterValidate = require('./userRegisterValidate');
const validateUserDatabase = require('./validateUserDatabase');
const validateLoginFields = require('./validateLoginFields');
const validatePostFields = require('./validatePostFields');
const error = require('./error');
const auth = require('./auth');

module.exports = {
  userRegisterValidate,
  validateUserDatabase,
  validateLoginFields,
  validatePostFields,
  error,
  auth,
};
