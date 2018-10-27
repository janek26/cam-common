'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nameErrors = exports.lastNameErrors = exports.firstNameErrors = undefined;

var _yup = require('yup');

var _yup2 = _interopRequireDefault(_yup);

var _login = require('./login');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var firstNameErrors = exports.firstNameErrors = {
  required: 'Ein Vorname muss angegeben werden',
  min: 'Der Vorname muss mindestens 3 Zeichen haben',
  max: 'Der Vorname kann maximal 128 Zeichen haben'
};
var lastNameErrors = exports.lastNameErrors = {
  required: 'Ein Nachname muss angegeben werden',
  min: 'Der Nachname muss mindestens 3 Zeichen haben',
  max: 'Der Nachname kann maximal 128 Zeichen haben'
};
var nameErrors = exports.nameErrors = {
  required: 'Ein Username muss angegeben werden',
  min: 'Der Username muss mindestens 3 Zeichen haben',
  max: 'Der Username kann maximal 128 Zeichen haben'
};

exports.default = _yup2.default.object().required().shape({
  firstName: _yup2.default.string().required(firstNameErrors.required).min(3, firstNameErrors.min).max(128, firstNameErrors.max),
  lastName: _yup2.default.string().required(lastNameErrors.required).min(3, lastNameErrors.min).max(128, lastNameErrors.max),
  name: _yup2.default.string().required(nameErrors.required).min(3, nameErrors.min).max(128, nameErrors.max),
  email: _login.emailValidation,
  password: _login.passwordValidation
});