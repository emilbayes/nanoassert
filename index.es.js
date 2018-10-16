assert.notEqual = notEqual
assert.notOk = notOk
assert.equal = equal
assert.ok = assert

function equal (a, b, m) {
  assert(a == b, m) // eslint-disable-line eqeqeq
}

function notEqual (a, b, m) {
  assert(a != b, m) // eslint-disable-line eqeqeq
}

function notOk (t, m) {
  assert(!t, m)
}

export default function assert (t, m) {
  if (!t) throw new Error(m || 'AssertionError')
}
