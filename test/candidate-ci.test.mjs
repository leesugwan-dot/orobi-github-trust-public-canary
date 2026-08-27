import test from 'node:test';
import assert from 'node:assert/strict';

test('synthetic candidate check intentionally fails', () => {
  assert.equal(2 + 2, 5);
});
