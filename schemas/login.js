import yup from 'yup'

export const emailErrors = {
  required: 'Eine eMail muss angegeben werden',
  format: 'Die eMail ist ungültig',
}
export const passwordErrors = {
  required: 'Ein Password muss angegeben werden',
  min: 'Ein Password muss mindestens 6 Zeichen haben',
  max: 'Ein Password kann maximal 128 Zeichen haben',
}

export const emailValidation = yup
  .string()
  .required(emailErrors.required)
  .email(emailErrors.format)
export const passwordValidation = yup
  .string()
  .required(passwordErrors.required)
  .min(6, passwordErrors.min)
  .max(128, passwordErrors.max)

export default yup
  .object()
  .required()
  .shape({
    email: emailValidation,
    password: passwordValidation,
  })
