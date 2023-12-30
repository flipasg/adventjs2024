export function findNaughtyStep(original: string, modified: string): string {
  if (original === modified) {
    return '';
  }

  if (original === '') {
    return modified;
  }

  if (modified === '') {
    return original;
  }

  const numberOfSteps = Math.max(original.length, modified.length);
  for (let i = 0; i < numberOfSteps; i++) {
    if (original[i] !== modified[i]) {
      return (original.length >= modified.length ? original : modified)[i];
    }
  }

  return '';
}
