export function padNumber(n: number, width = 3, z = "0"): string {
  const numberToString = n.toString();
  return numberToString.length >= width
    ? numberToString
    : new Array(width - numberToString.length + 1).join(z) + numberToString;
}
