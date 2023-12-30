import { describe, expect, test } from 'vitest';

describe('challenge2', () => {
  test('should be an empty array when no gifts are provided', () => {
    expect(manufacture([], 'wood')).toEqual([]);
  });

  test('should be an array with one gift when one gift is provided', () => {
    expect(manufacture(['doll'], 'plastic')).toEqual(['doll']);
  });

  test('should be an array with multiple gifts when multiple gifts are provided', () => {
    expect(manufacture(['doll', 'car', 'ball'], 'metal')).toEqual(['doll', 'car', 'ball']);
  });

  test('should be an array with the same order of gifts as provided', () => {
    expect(manufacture(['ball', 'car', 'doll'], 'wood')).toEqual(['ball', 'car', 'doll']);
  });
});