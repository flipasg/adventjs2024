import { describe, expect, test } from 'vitest';
import { cyberReindeer } from '.';

describe('challenge5', () => {
  test('midu-test 1', () => {
    const road = 'S..|...|..';
    const time = 10;
    const result = [
      'S..|...|..', // initial state
      '.S.|...|..', // sled advances on the road
      '..S|...|..', // sled advances on the road
      '..S|...|..', // sled stops at the barrier
      '..S|...|..', // sled stops at the barrier
      '...S...*..', // barrier opens, sled advances
      '...*S..*..', // sled advances on the road
      '...*.S.*..', // sled advances on the road
      '...*..S*..', // sled advances on the road
      '...*...S..', // passes through the open barrier
    ];
    expect(cyberReindeer(road, time)).toStrictEqual(result);
  });
});
