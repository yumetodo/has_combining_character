# has_combining_character

[![Actions Status](https://github.com/yumetodo/has_combining_character/workflows/Node%20CI/badge.svg)](https://github.com/yumetodo/has_combining_character/actions)
[![Known Vulnerabilities](https://snyk.io/test/github/yumetodo/has_combining_character/badge.svg?targetFile=package.json)](https://snyk.io/test/github/yumetodo/has_combining_character?targetFile=package.json)

Unicode 10.0 based combining charactor checker

```js
const hasCombiningCharacter = require('has_combining_character');
hasCombiningCharacter('a'); // => false
hasCombiningCharacter('が'); // => false
hasCombiningCharacter('\u304b\u3099'); // => true
hasCombiningCharacter('👩‍❤️‍💋‍👨'); // => true
```
