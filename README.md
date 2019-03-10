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

## Demo

Look at a demonstration of how it works [here](https://whatsapp-url.netlify.com).

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

## Support

Please [open an issue](https://github.com/nandomoreirame/readme-boilerplate/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/nandomoreirame/readme-boilerplate/compare?expand=1).
Contributing

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -m 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

## History

See [Releases](../../releases/latest) for detailed changelog.

## Author

| [![twitter/oseunando](https://avatars6.githubusercontent.com/u/1318271?v=4&s=120)](http://twitter.com/oseunando "Follow @oseunando on Twitter") |
| ----------------------------------------------------------------------------------------------------------------------------------------------- |
| [Fernando Moreira](http://twitter.com/oseunando)                                                                                                |

### Inspired by

[bukinoshita/share-twitter](https://github.com/bukinoshita/share-twitter) - Thank you!

## License

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```

Code is under [MIT License](/LICENSE) - © Fernando Moreira

## Buy me a coffee?

It will encourage me to keep it going, fix whatever bugs you find and spend time making it better :D

<a href="https://www.paypal.me/nandomoreira/5">
  <img src="https://img.shields.io/badge/Buy%20me%20a%20coffee%3F-US%24%205-blue.svg" alt="Buy me a coffee? - https://www.paypal.me/nandomoreira/5">
</a>
