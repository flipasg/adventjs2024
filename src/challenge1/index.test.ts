import { findFirstRepeated } from '.';
import { describe, expect, test } from 'vitest';

describe('findFirstRepeated', () => {
  test('returns null for an empty array', () => {
    expect(findFirstRepeated([])).toBe(-1);
  });

  test('returns null for an array with no repeats', () => {
    expect(findFirstRepeated([1, 2, 3, 4, 5])).toBe(-1);
  });

  test('returns the first repeated number for an array with repeats', () => {
    expect(findFirstRepeated([1, 2, 3, 2, 1])).toBe(2);
  });

  test('returns the first repeated number even if it is 0', () => {
    expect(findFirstRepeated([0, 1, 2, 3, 0])).toBe(0);
  });
});