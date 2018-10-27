"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.schemas = void 0;

var _schemas = require("./schemas");

var schemas = {
  loginSchema: _schemas.loginSchema,
  registerSchema: _schemas.registerSchema
};
exports.schemas = schemas;
var _default = {
  schemas: schemas
};
exports.default = _default;