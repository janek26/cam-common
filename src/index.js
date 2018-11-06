import {
  loginSchema,
  registerSchema,
  profileSchema,
  addCameraSchema,
  hostValidation,
  portValidation,
} from './schemas'

export const schemas = {
  loginSchema,
  registerSchema,
  profileSchema,
  addCameraSchema,
}
export const validations = { hostValidation, portValidation }

export default {
  schemas,
  validations,
}
