import {
  loginSchema,
  registerSchema,
  addCameraSchema,
  hostValidation,
  portValidation,
} from './schemas'

export const schemas = { loginSchema, registerSchema, addCameraSchema }
export const validations = { hostValidation, portValidation }

export default {
  schemas,
  validations,
}
