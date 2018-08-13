# WhatsApp url [![Build Status](https://travis-ci.org/nandomoreirame/whatsapp-url.svg?branch=master)](https://travis-ci.org/nandomoreirame/whatsapp-url)

> Create a Whatsapp url

## Install

```bash
$ yarn add whatsapp-url
```

## Usage

```js
const whatsappUrl = require('whatsapp-url')

console.log(whatsappUrl({
  phone: '5541984401163',
  text: 'Hello World, its me Mario!'
}))
// https://api.whatsapp.com/send?text=Hello%20World,%20its%20me%20Mario!&phone=5541984401163

console.log(whatsappUrl({
  phone: '5541984401163',
  text: 'Hello World, its me Luigi!',
  isWeb: true
}))
// https://web.whatsapp.com/send?text=Hello%20World,%20its%20me%20Luigi!&phone=5541984401163
```

_When add the `url` to a `<a/>` tag it should work like [this](https://api.whatsapp.com/send?text=Hello%20World,%20its%20me%20Mario!&phone=5541984401163)_

## Examples

Check the [examples](/examples)

## API

### whatsappUrl([options])

Returns a `string`

#### text

Type: `string`<br/>
Example: `Hello%20World,%20its%20me%20Mario!`

#### phone

Type: `string`<br/>
Example: `55984401163`

---

### Inspired by

[bukinoshita/share-twitter](https://github.com/bukinoshita/share-twitter) - Thank you!

## License

MIT © [Fernando Moreira](https://nandomoreira.me)
