assert.notEqual = notEqual
assert.notOk = notOk
assert.equal = equal
assert.ok = assert
assert.fail = fail
assert.ifError = ifError
assert.rejects = rejects
assert.throws = throws
assert.isTrue = isTrue
assert.isFalse = isFalse

module.exports = assert

function isTrue(t, m) {
  assert(t === true, m || 'Expected "' + t + '" to be true.')
}

function isFalse(t, m) {
  assert(t === false, m || 'Expected "' + t + '" to be false.')
}

function _toPromise (v) {
  if (v && typeof v.then === 'function') {
    return v
  } else if (v && typeof v === 'function') {
    return v()
  } else {
    fail('Expected "asyncFn" to be a promise.');
  }
}

function _isPromise (v) {
  return v && typeof v.then === 'function'
}

function equal (a, b, m) {
  assert(a == b, m || 'Expected "' + a + '" to equal "' + b + '".') // eslint-disable-line eqeqeq
}

function notEqual (a, b, m) {
  assert(a != b, m || 'Expected "' + a + '" to not equal "' + b + '".') // eslint-disable-line eqeqeq
}

function notOk (t, m) {
  assert(!t, m || 'Expected "' + t + '" to be falsy.')
}

function assert (t, m) {
  if (!t) fail(m || '')
}

function fail (m) {
  throw new Error(m || 'AssertionError')
}

function ifError (t) {
  if (t != null) fail('ifError got unwanted exception: ' + t)
}

function rejects (asyncFn, err, m) {
  // don't accept type `function | string | regexp` for now
  err = err || Error

  return new Promise(function (resolve, reject) {
    // do the conversion here so bad functions reject the promise
    asyncFn = _toPromise(asyncFn)
    asyncFn.catch(resolve)
  })
}

function throws(fn, err, m) {
  err = err || Error
  
  try {
    fn()
    fail('Expected the function to throw an error.')
  } catch (err) {}
}

