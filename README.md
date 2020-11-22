# next-pipe
> Pipe for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-pipe
```

## usage
```js
import '@jswork/next-pipe';

const addMore = require('./pipes/add-more');
const addZero = require('./pipes/add-zero');

const pipe1 = { fn: addMore, args: [111, 999] };
const pipe2 = { fn: addZero };

nx.pipe('aaa', [pipe1, pipe2]);   // '0111aaa9990'
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-pipe/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-pipe
[version-url]: https://npmjs.org/package/@jswork/next-pipe

[license-image]: https://img.shields.io/npm/l/@jswork/next-pipe
[license-url]: https://github.com/afeiship/next-pipe/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-pipe
[size-url]: https://github.com/afeiship/next-pipe/blob/master/dist/next-pipe.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-pipe
[download-url]: https://www.npmjs.com/package/@jswork/next-pipe
