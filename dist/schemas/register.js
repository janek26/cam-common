"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.nameErrors = exports.lastNameErrors = exports.firstNameErrors = void 0;

var yup = _interopRequireWildcard(require("yup"));

var _login = require("./login");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var _default = yup.object().required().shape({
  firstName: yup.string().required(firstNameErrors.required).min(3, firstNameErrors.min).max(128, firstNameErrors.max),
  lastName: yup.string().required(lastNameErrors.required).min(3, lastNameErrors.min).max(128, lastNameErrors.max),
  name: yup.string().required(nameErrors.required).min(3, nameErrors.min).max(128, nameErrors.max),
  email: _login.emailValidation,
  password: _login.passwordValidation
});

exports.default = _default;