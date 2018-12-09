# `nanoassert`

> Nanoscale assertion module

## Usage

```js
var assert = require('nanoassert');
assert(a !== b, `${a} !== ${b}`);
```

## API

The main export is the assert function, which takes a value and an error message. If the value is false, an error is thrown. Read more about the [assert function here](https://nodejs.org/api/assert.html).

### `assert(declaration, [message])`

### `assert.ok(declaration, [message])`

+ declaration: `<any>`
+ message *(optional)*: `<string>`

Assert that `declaration` is truthy otherwise throw `Error` with
optional `message`, which defaults to `AssertionError`.
If you want friendlier messages you can use template strings to show the
assertion made like in the example above.

### `assert.notOk(declaration, [message])`

Assert that `declaration` is not truthy.

+ declaration: `<any>`
+ message *(optional)*: `<string>`

### `assert.equal(a, b, [message])`

Assert that `a` is loosely equal to `b`. Uses `==` for the comparison.

+ a: `<any>`
+ b: `<any>`
+ message *(optional)*: `<string>`

### `assert.notEqual(a, b, [message])`

Assert that `a` is loosely not equal to `b`. Uses `==` for the comparison.

+ a: `<any>`
+ b: `<any>`
+ message *(optional)*: `<string>`

## Why

I like to write public facing code very defensively, but have complaints about
the size incurred by the `assert` module. I only use the top-level `assert`
method anyway, so this should make everyone happy :)

## Installation

You can install `nanoassert` via NPM.

```sh
npm install nanoassert
```

## License

This project is licensed under [ISC](LICENSE).