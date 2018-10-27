"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.registerSchema = exports.loginSchema = void 0;

var _login = _interopRequireDefault(require("./login"));

var _register = _interopRequireDefault(require("./register"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loginSchema = _login.default;
exports.loginSchema = loginSchema;
var registerSchema = _register.default;
exports.registerSchema = registerSchema;
var _default = {
  loginSchema: loginSchema,
  registerSchema: registerSchema
};
exports.default = _default;