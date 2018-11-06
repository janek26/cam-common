import registerSchema from './register'

export default registerSchema.shape({
  password: undefined, // dont expect password when updating
})
