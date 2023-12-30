import { describe, expect, test } from 'vitest';
import { findNaughtyStep } from '.';

describe('challenge3', () => {
  test('midu-test 1', () => {
    const original = 'abcd';
    const modified = 'abcde';
    expect(findNaughtyStep(original, modified)).toBe('e');
  });

  test('midu-test 2', () => {
    const original = 'stepfor';
    const modified = 'stepor';
    expect(findNaughtyStep(original, modified)).toBe('f');
  });

  test('midu-test 3', () => {
    const original = 'abcde';
    const modified = 'abcde';
    expect(findNaughtyStep(original, modified)).toBe('');
  });
});
