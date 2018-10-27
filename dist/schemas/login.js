'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passwordValidation = exports.emailValidation = exports.passwordErrors = exports.emailErrors = undefined;

var _yup = require('yup');

var _yup2 = _interopRequireDefault(_yup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emailErrors = exports.emailErrors = {
  required: 'Eine eMail muss angegeben werden',
  format: 'Die eMail ist ungültig'
};
var passwordErrors = exports.passwordErrors = {
  required: 'Ein Password muss angegeben werden',
  min: 'Ein Password muss mindestens 6 Zeichen haben',
  max: 'Ein Password kann maximal 128 Zeichen haben'
};

var emailValidation = exports.emailValidation = _yup2.default.string().required(emailErrors.required).email(emailErrors.format);
var passwordValidation = exports.passwordValidation = _yup2.default.string().required(passwordErrors.required).min(6, passwordErrors.min).max(128, passwordErrors.max);

exports.default = _yup2.default.object().required().shape({
  email: emailValidation,
  password: passwordValidation
});