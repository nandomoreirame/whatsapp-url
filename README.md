# WhatsApp url

> Create a Whatsapp url

## Install

```bash
$ yarn add whatsapp-url
```

## Usage

```js
const whatsappUrl = require('whatsapp-url')

console.log(whatsappUrl({
  url: '5541984401163',
  text: 'Hello World, its me Mario!'
}))
// https://api.whatsapp.com/send?text=Hello%20World,%20its%20me%20Mario!&phone=5541984401163

console.log(whatsappUrl({
  url: '5541984401163',
  text: 'Hello World, its me Luigi!',
  openWeb: true
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

## License

MIT © [Fernando Moreira](https://nandomoreira.me)
