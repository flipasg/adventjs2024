import { describe, expect, test } from 'vitest';
import { maxDistance } from '.';

describe('challenge5', () => {
  test('midu-test 1', () => {
    const movements = '>>*<'
    expect(maxDistance(movements)).toBe(2);
  });

  test('midu-test 2', () => {
    const movements = '<<<>'
    expect(maxDistance(movements)).toBe(2);
  });

  test('midu-test 3', () => {
    const movements = '>***>'
    expect(maxDistance(movements)).toBe(5);
  });
});
