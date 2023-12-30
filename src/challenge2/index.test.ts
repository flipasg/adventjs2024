import { describe, expect, test } from 'vitest';
import { manufacture } from '.';

describe('challenge2', () => {
  test('midu-test 1', () => {
    const gifts = ['tren', 'oso', 'pelota'];
    const materials = 'tronesa';
    expect(manufacture(gifts, materials)).toEqual(['tren', 'oso']);
  });

  test('midu-test 2', () => {
    const gifts = ['juego', 'puzzle'];
    const materials = 'jlepuz';
    expect(manufacture(gifts, materials)).toEqual(["puzzle"]);
  });

  test('midu-test 3', () => {
    const gifts = ['libro', 'ps5']
    const materials = 'psli'
    expect(manufacture(gifts, materials)).toEqual([]);
  });

});
