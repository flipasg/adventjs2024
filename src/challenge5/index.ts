export function cyberReindeer(road: string, time: number) {

  const result: string[] = [road];
  let position = 0;

  if (time < 1 || road.length === 0) return result;

  for (let i = 0; i < time - 1; i++) {
    let currentRoad = result[i];
    if (i === 4) {
      currentRoad = currentRoad.replaceAll(
        '|',
       '*'
      );
    }

    const nextStep = currentRoad[position + 1];

    let newRoad = currentRoad;
    if (nextStep !== '|') {
      const isBarrier = '|' === road[position];
      const lastElement = isBarrier
        ? '*'
        : '.';

      const prev = newRoad.substring(0, position);
      const current = lastElement + 'S';
      const next = newRoad.substring(position + 2);
      newRoad = prev + current + next;
       
      position++;
    }
    result.push(newRoad);
  }
  return result;
}
