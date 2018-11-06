"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.portValidation = exports.hostValidation = exports.addCameraSchema = exports.profileSchema = exports.registerSchema = exports.loginSchema = void 0;

var _login = _interopRequireDefault(require("./login"));

var _profile = _interopRequireDefault(require("./profile"));

var _register = _interopRequireDefault(require("./register"));

var _addCamera = _interopRequireWildcard(require("./addCamera"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loginSchema = _login.default;
exports.loginSchema = loginSchema;
var registerSchema = _register.default;
exports.registerSchema = registerSchema;
var profileSchema = _profile.default;
exports.profileSchema = profileSchema;
var addCameraSchema = _addCamera.default;
exports.addCameraSchema = addCameraSchema;
var hostValidation = _addCamera.hostValidation;
exports.hostValidation = hostValidation;
var portValidation = _addCamera.portValidation;
exports.portValidation = portValidation;
var _default = {
  loginSchema: loginSchema,
  profileSchema: profileSchema,
  registerSchema: registerSchema,
  addCameraSchema: addCameraSchema,
  hostValidation: hostValidation,
  portValidation: portValidation
};
exports.default = _default;