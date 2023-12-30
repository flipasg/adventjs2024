import { describe, expect, test } from 'vitest';
import { decode } from '.';

describe('challenge4', () => {
  test('midu-test 1', () => {
    const message = 'hola (odnum)';
    expect(decode(message)).toBe('hola mundo');
  });

  test('midu-test 2', () => {
    const message = '(olleh) (dlrow)!';
    expect(decode(message)).toBe('hello world!');
  });

  test('midu-test 3', () => {
    const message = 'sa(u(cla)atn)s';
    expect(decode(message)).toBe('santaclaus');
  });
});
