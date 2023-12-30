export function findFirstRepeated(gifts: number[]): number | null {
  let giftSet = new Set<number>();
  for (let gift of gifts) {
      if (giftSet.has(gift)) {
          return gift;
      }
      giftSet.add(gift);
  }
  return -1;
}