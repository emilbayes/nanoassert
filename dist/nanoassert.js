var assert =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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



/***/ })
/******/ ]);