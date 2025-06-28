/**
 * Assert that `predicate` is truthy, otherwise throw `AssertionError` with optional `message`.
 * In Javascript runtimes that support `Error.captureStackTrace`, you will get a nicer stack trace with this error.
 *
 * @param predicate - Value that must be truthy for the assertion to pass.
 * @param message - Optional message to include in the error if the assertion fails.
 * @throws {AssertionError} If `predicate` is falsy.
 *
 * @example
 * assert(a !== b, `${a} !== ${b}`)
 */
declare function assert (predicate: unknown, message?: string): asserts predicate;
