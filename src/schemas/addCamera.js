import * as yup from 'yup'

export const nameErrors = {
  required: 'Ein Name muss angegeben werden',
  min: 'Der Name muss mindestens 3 Zeichen haben',
  max: 'Der Name kann maximal 128 Zeichen haben',
}
export const addressErrors = {
  required: 'Eine Adresse muss angegeben werden',
  url: 'Die Adresse ist keine gültige URL',
  whitespace: 'Die Adresse darf kein Leerzeichen enthalten',
  local:
    'Nutzen sie nur öffentliche Adressen. Lokale Adressen sind nicht aus dem Internet zu erreichen und unzulässig',
}
export const portErrors = {
  required: 'Ein Port muss angegeben werden',
  min: 'Ein Port muss positiv sein',
  max: 'Ein Port kann maximal 65535 lauten',
}

export const matchesHostnamesOrIp = /(^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$)|(^(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}?$)/

export default yup
  .object()
  .required()
  .shape({
    name: yup
      .string()
      .required(nameErrors.required)
      .min(3, nameErrors.min)
      .max(128, nameErrors.max),
    address: yup
      .string()
      .required(addressErrors.required)
      .trim()
      .matches(matchesHostnamesOrIp, addressErrors.url)
      .matches(
        /^((?!((^127\.)|(^10\.)|(^172\.1[6-9]\.)|(^172\.2[0-9]\.)|(^172\.3[0-1]\.)|(^192\.168\.))).)*$/,
        addressErrors.local,
      ),
    http: yup
      .number()
      .required(addressErrors.required)
      .min(0, portErrors.min)
      .max(65535, portErrors.max),
    rtsp: yup
      .number()
      .min(0, portErrors.min)
      .max(65535, portErrors.max),
  })
