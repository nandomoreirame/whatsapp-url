'use strict'

const treat = (str, { replace = '' } = {}) => str.split(' ').join(replace)

module.exports = ({ phone, text, openWeb = false } = {}) => {
  if (typeof phone === 'undefined') return false

  const baseUrl = `https://${(openWeb) ? 'web' : 'api'}.whatsapp.com/send`
  const hasPhone = phone ? `phone=${phone}` : undefined
  const hasText = text ? `text=${treat(text, { replace: '%20' })}` : undefined
  const filtering = [hasText, hasPhone].filter(Boolean)
  const queries = filtering.join('&')

  return `${baseUrl}?${queries}`
}
