"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.validations = exports.schemas = void 0;

var _schemas = require("./schemas");

var schemas = {
  loginSchema: _schemas.loginSchema,
  registerSchema: _schemas.registerSchema,
  profileSchema: _schemas.profileSchema,
  addCameraSchema: _schemas.addCameraSchema
};
exports.schemas = schemas;
var validations = {
  hostValidation: _schemas.hostValidation,
  portValidation: _schemas.portValidation,
  emailValidation: _schemas.emailValidation
};
exports.validations = validations;
var _default = {
  schemas: schemas,
  validations: validations
};
exports.default = _default;