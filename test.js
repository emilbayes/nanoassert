var assert = require('.')
var test = require('tape')

var methods = {
  'notEqual': [true, false],
  'notOk': [false],
  'equal': [true, true],
  'ok': [true],
  'isTrue': [true],
  'isFalse': [false]
}

test('assert', function (t) {
  try {
    assert(true === true) // test that it doesn't throw
    t.pass('does not throw on truthy')
  } catch (e) {!
    t.fail('should not throw on truthy')
  }

  t.throws(assert.bind(null, false), 'throws on falsy')

  try {
    assert(false)
  } catch (e) {
    t.equal(e.message, 'AssertionError', 'default message')
  }

  try {
    assert(false, 'hello world')
  } catch (e) {
    t.equal(e.message, 'hello world', 'custom message')
  }

  Object.keys(methods).forEach(function (method) {
    var args = methods[method]
    try {
      assert[method].apply(null, args)
      t.pass('passing "' + args.join(", ") + '" does not make "' + method + '" throw')
    } catch (e) {
      t.fail('passing "' + args.join(', ') + '" should not make "' + method + '" throw');
    }
  })

  t.end()
})

test('fail', function (t) {
  try {
    assert.fail('hello');
    t.fail('hello')
  } catch (error) {
    t.pass('throws an assertion error');
  }

  t.end();
});

test('ifError', function (t) {
  t.plan();
  try {
    assert.ifError(2);
    t.fail('it should throw if val isnt null | undefined');
  } catch (error) {
    t.pass('it did throw when passed a value');
  }

  try {
    assert.ifError(undefined);
    t.pass('it didnt throw when passed undefined');
  } catch (error) {
    t.fail('it shouldnt throw if val is undefined');
  }

  try {
    assert.ifError(null);
    t.pass('it didnt throw when passed null');
  } catch (error) {
    t.fail('it shouldnt throw if val is null');
  }

  t.end();
});