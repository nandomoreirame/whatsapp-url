const { strict } = require('assert')
const whatsappUrl = require('.')

let phone = ''
let text = ''

describe('whatsappUrl()', () => {
  beforeEach(() => {
    phone = '5541984401163'
    text = 'Hello World, its me Mario!'
  })

  describe('return false', () => {
    it('should return false when the phone value is not present', () => {
      const w = whatsappUrl({})
      strict.equal(w, false)
    })
  })

  describe('return https://api.whatsapp.com/send?phone=5541984401163', () => {
    it('should return WhatsApp API url when the phone value is present', () => {
      const w = whatsappUrl({ phone })
      strict.equal(w, 'https://api.whatsapp.com/send?phone=5541984401163')
    })
  })

  describe('return https://api.whatsapp.com/send?text=Hello%20World,%20its%20me%20Mario!&phone=5541984401163', () => {
    it('should return WhatsApp API url when the phone and text values is present', () => {
      const w = whatsappUrl({ phone, text })
      strict.equal(w, 'https://api.whatsapp.com/send?text=Hello%20World,%20its%20me%20Mario!&phone=5541984401163')
    })
  })

  describe('return https://web.whatsapp.com/send?phone=5541984401163', () => {
    it('should return WhatsApp Web url when the phone value is present and isWeb value is true', () => {
      const w = whatsappUrl({ phone, text: '', isWeb: true })
      strict.equal(w, 'https://web.whatsapp.com/send?phone=5541984401163')
    })
  })

  describe('return https://web.whatsapp.com/send?text=Hello%20World,%20its%20me%20Mario!&phone=5541984401163', () => {
    it('should return WhatsApp Web url when the phone and text values is present and isWeb value is true', () => {
      const w = whatsappUrl({ phone, text, isWeb: true })
      strict.equal(w, 'https://web.whatsapp.com/send?text=Hello%20World,%20its%20me%20Mario!&phone=5541984401163')
    })
  })
})
