import login from './login'
import register from './register'
import addCamera from './addCamera'

export const loginSchema = login
export const registerSchema = register
export const addCameraSchema = addCamera

export default {
  loginSchema,
  registerSchema,
  addCameraSchema,
}
