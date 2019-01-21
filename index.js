module.exports = assert

class AssertionError extends Error {
  constructor (...args) {
    super(...args)

    if (Error.captureStackTrace) Error.captureStackTrace(this, assert)
  }
}
AssertionError.prototype.name = 'AssertionError'

function assert (t, m) {
  if (!t) throw new AssertionError(m)
}
