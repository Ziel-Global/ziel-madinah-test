export function extractNumericAmount(text: string): number {
  return parseFloat(text.replace(/[^0-9.]/g, ""));
}
