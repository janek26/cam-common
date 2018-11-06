import login from './login'
import profile from './profile'
import register from './register'
import addCamera, {
  hostValidation as hV,
  portValidation as pV,
} from './addCamera'

export const loginSchema = login
export const registerSchema = register
export const profileSchema = profile
export const addCameraSchema = addCamera

export const hostValidation = hV
export const portValidation = pV

export default {
  loginSchema,
  profileSchema,
  registerSchema,
  addCameraSchema,

  hostValidation,
  portValidation,
}
