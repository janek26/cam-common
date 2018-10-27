"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.passwordValidation = exports.emailValidation = exports.passwordErrors = exports.emailErrors = void 0;

var _yup = _interopRequireDefault(require("yup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emailErrors = {
  required: 'Eine eMail muss angegeben werden',
  format: 'Die eMail ist ungültig'
};
exports.emailErrors = emailErrors;
var passwordErrors = {
  required: 'Ein Password muss angegeben werden',
  min: 'Ein Password muss mindestens 6 Zeichen haben',
  max: 'Ein Password kann maximal 128 Zeichen haben'
};
exports.passwordErrors = passwordErrors;

var emailValidation = _yup.default.string().required(emailErrors.required).email(emailErrors.format);

exports.emailValidation = emailValidation;

var passwordValidation = _yup.default.string().required(passwordErrors.required).min(6, passwordErrors.min).max(128, passwordErrors.max);

exports.passwordValidation = passwordValidation;

var _default = _yup.default.object().required().shape({
  email: emailValidation,
  password: passwordValidation
});

exports.default = _default;