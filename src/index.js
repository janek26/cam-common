import {
  loginSchema,
  registerSchema,
  profileSchema,
  addCameraSchema,
  hostValidation,
  portValidation,
  emailValidation,
} from './schemas'

export const schemas = {
  loginSchema,
  registerSchema,
  profileSchema,
  addCameraSchema,
}
export const validations = { hostValidation, portValidation, emailValidation }

export default {
  schemas,
  validations,
}
