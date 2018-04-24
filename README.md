# random-number

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Dependency Status](https://img.shields.io/david/m31271n/random-number.svg)](#)
[![DevDependency Status](https://img.shields.io/david/m31271n/random-number.svg)](#)
[![Travis Build Status](https://img.shields.io/travis/m31271n/random-number.svg)](#)
[![NPM Downloads](https://img.shields.io/npm/dm/@m31271n/random-number.svg)](#)

> Get a number randomly.

## Install

```
$ npm install random-number
```

## Usage

```js
const randomNumber = require('random-number');

randomNumber({
  min: 1
  max: 1000,
  float: true,
  includeMax: true
});
```

## API

### randomNumber(options)

| property     | type    | description                 |
| ------------ | ------- | --------------------------- |
| `min`        | Number  | minimum value               |
| `max`        | Number  | maximum value               |
| `float`      | Boolean | float or integer            |
| `includeMax` | Boolean | include maxmum value or not |

## TODO

* type checking of options
