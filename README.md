# has_combining_character

[![Actions Status](https://github.com/yumetodo/has_combining_character/workflows/Node%20CI/badge.svg)](https://github.com/yumetodo/has_combining_character/actions)
[![Greenkeeper badge](https://badges.greenkeeper.io/yumetodo/has_combining_character.svg)](https://greenkeeper.io/)

Unicode 10.0 based combining charactor checker

```js
const hasCombiningCharacter = require('has_combining_character');
hasCombiningCharacter('a'); // => false
hasCombiningCharacter('が'); // => false
hasCombiningCharacter('\u304b\u3099'); // => true
hasCombiningCharacter('👩‍❤️‍💋‍👨'); // => true
```
