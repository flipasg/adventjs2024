export function maxDistance(movements: string) {
  const lt = movements.split('<').length - 1;
  const gt = movements.split('>').length - 1;
  const star = movements.split('*').length - 1;

  return Math.abs(gt - lt) + star;
}
