"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.addCameraSchema = exports.registerSchema = exports.loginSchema = void 0;

var _login = _interopRequireDefault(require("./login"));

var _register = _interopRequireDefault(require("./register"));

var _addCamera = _interopRequireDefault(require("./addCamera"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loginSchema = _login.default;
exports.loginSchema = loginSchema;
var registerSchema = _register.default;
exports.registerSchema = registerSchema;
var addCameraSchema = _addCamera.default;
exports.addCameraSchema = addCameraSchema;
var _default = {
  loginSchema: loginSchema,
  registerSchema: registerSchema,
  addCameraSchema: addCameraSchema
};
exports.default = _default;