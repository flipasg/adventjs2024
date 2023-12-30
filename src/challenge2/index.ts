export function manufacture(gifts: string[], materials: string): string[] {
  const isNotIncluded = (material: string) => !materials.includes(material);
  return gifts.filter(gift => ![...gift].some(isNotIncluded));
}
