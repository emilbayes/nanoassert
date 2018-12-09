assert.notEqual = notEqual
assert.notOk = notOk
assert.equal = equal
assert.ok = assert

module.exports = assert

function equal (a, b, m) {
  assert(a == b, m || 'Expected "' + a + '" to equal "' + b + '".') // eslint-disable-line eqeqeq
}

function notEqual (a, b, m) {
  assert(a != b, m || 'Expected "' + a + '" to not equal "' + b + '".') // eslint-disable-line eqeqeq
}

function notOk (t, m) {
  assert(!t, m || 'Expected "' + a + '" to be falsy.');
}

function assert (t, m) {
  if (!t) throw new Error(m || 'AssertionError')
}
