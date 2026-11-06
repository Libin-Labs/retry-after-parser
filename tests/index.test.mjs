import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('parses seconds', () => {
  assert.equal(api.parseRetryAfter('5', 0), 5000);
});
test('trims surrounding whitespace', () => {
  assert.equal(api.parseRetryAfter(' 12 ', 0), 12000);
});
test('converts future HTTP date', () => {
  assert.equal(api.parseRetryAfter('Thu, 01 Jan 1970 00:00:10 GMT', 0), 10000);
});
test('clamps past dates to zero', () => {
  assert.equal(api.parseRetryAfter('Thu, 01 Jan 1970 00:00:00 GMT', 5000), 0);
});
test('accepts zero delay', () => {
  assert.equal(api.parseRetryAfter('0'), 0);
});
test('rejects malformed values', () => {
  assert.throws(() => api.parseRetryAfter('soon'), RangeError);
});
