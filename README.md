# pipefn
Pipeline Function Creator

[![github](https://img.shields.io/github/followers/willin.svg?style=social&label=Follow)](https://github.com/willin) [![npm](https://img.shields.io/npm/v/pipfn.svg)](https://npmjs.org/package/pipfn) [![npm](https://img.shields.io/npm/dm/pipfn.svg)](https://npmjs.org/package/pipfn) [![npm](https://img.shields.io/npm/dt/pipfn.svg)](https://npmjs.org/package/pipfn) ![size](https://img.shields.io/github/size/willin/pipfn/index.js.svg) ![dep](https://img.shields.io/david/willin/pipfn.svg)

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
