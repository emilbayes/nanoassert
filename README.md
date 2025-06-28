# `nanoassert`

[![example workflow](https://github.com/emilbayes/nanoassert/actions/workflows/npm.yml/badge.svg)](https://github.com/emilbayes/nanoassert/actions/npm.yml)

> Nanoscale assertion module

## Usage

```js
const assert = require('nanoassert')

assert(a !== b, `${a} !== ${b}`)
```

## API

### `assert(predicate, [message])`

Assert that `predicate` is truthy, otherwise throw `AssertionError` with
optional `message`. In Javascript runtimes that support `Error.captureStackTrace`, you will get a nicer
stack trace with this error.
If you want friendlier messages you can use template strings to show the
assertion made like in the example above.

## Why

I like to write public facing code very defensively, but have reservations about
the size incurred by the `assert` module. I only use the top-level `assert`
method anyway.

## `nanoassert@^1.1.0`

Docs for the previous version, which is used by many modules on npm, can be
[found here](https://github.com/emilbayes/nanoassert/tree/v1.1.0)

## `nanoassert@^3.0.0`

Modernise `nanoassert` some, and add the small type definition from `DefinitelyTyped`. Functionally there should be no changes for most users, but the `name` property of the `AssertionError` is no longer set on the prototype, and newer syntax is employed, which might break some downstream modules.

Thank you to the folks that created and maintained the original type definitions.

## Install

```sh
npm install nanoassert
```

## License

[ISC](LICENSE)
