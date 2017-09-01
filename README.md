# pipefn
Pipeline Function Creator

[![github](https://img.shields.io/github/followers/willin.svg?style=social&label=Follow)](https://github.com/willin) [![npm](https://img.shields.io/npm/v/pipefn.svg)](https://npmjs.org/package/pipefn) [![npm](https://img.shields.io/npm/dm/pipefn.svg)](https://npmjs.org/package/pipefn) [![npm](https://img.shields.io/npm/dt/pipefn.svg)](https://npmjs.org/package/pipefn) ![size](https://img.shields.io/github/size/willin/pipefn/index.js.svg) ![dep](https://img.shields.io/david/willin/pipefn.svg)

## Usage

```js
a |> _(fn,b)
//=> fn(a,b)
a |> _(fn,b,c,d)
//=> fn(a,b,c,d)
```

Demo:

```js
const _ = require('pipefn');

const result = [1, 2, 3, 4, 5] |> _([].concat, [6, 7, 8, 9, 0]);
//=> means [].concat([1,2,3,4,5],[6,7,8,9,0])

console.log(result);
//=> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]
```

## License

MIT

通过支付宝捐赠：

![qr](https://cloud.githubusercontent.com/assets/1890238/15489630/fccbb9cc-2193-11e6-9fed-b93c59d6ef37.png)
