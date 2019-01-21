module.exports = assert

class AssertionError extends Error {}
AssertionError.prototype.name = 'AssertionError'

function assert (t, m) {
  if (!t) {
    var err = new AssertionError(m)
    if (Error.captureStackTrace) Error.captureStackTrace(err, assert)
    throw err
  }
}
