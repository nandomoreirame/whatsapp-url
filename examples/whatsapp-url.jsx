'use strict'

import whatsappUrl from 'whatsapp-url'

export default = ({ phone, text }) => <a href={whatsappUrl({ phone, text })}>Talk to me on WhatsApp</a>
