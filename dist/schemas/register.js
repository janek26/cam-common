"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.nameErrors = exports.lastNameErrors = exports.firstNameErrors = void 0;

var _yup = _interopRequireDefault(require("yup"));

var _login = require("./login");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var firstNameErrors = {
  required: 'Ein Vorname muss angegeben werden',
  min: 'Der Vorname muss mindestens 3 Zeichen haben',
  max: 'Der Vorname kann maximal 128 Zeichen haben'
};
exports.firstNameErrors = firstNameErrors;
var lastNameErrors = {
  required: 'Ein Nachname muss angegeben werden',
  min: 'Der Nachname muss mindestens 3 Zeichen haben',
  max: 'Der Nachname kann maximal 128 Zeichen haben'
};
exports.lastNameErrors = lastNameErrors;
var nameErrors = {
  required: 'Ein Username muss angegeben werden',
  min: 'Der Username muss mindestens 3 Zeichen haben',
  max: 'Der Username kann maximal 128 Zeichen haben'
};
exports.nameErrors = nameErrors;

var _default = _yup.default.object().required().shape({
  firstName: _yup.default.string().required(firstNameErrors.required).min(3, firstNameErrors.min).max(128, firstNameErrors.max),
  lastName: _yup.default.string().required(lastNameErrors.required).min(3, lastNameErrors.min).max(128, lastNameErrors.max),
  name: _yup.default.string().required(nameErrors.required).min(3, nameErrors.min).max(128, nameErrors.max),
  email: _login.emailValidation,
  password: _login.passwordValidation
});

exports.default = _default;