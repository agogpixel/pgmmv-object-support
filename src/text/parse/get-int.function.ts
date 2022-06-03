/**
 * Exports get int function.
 *
 * @module text/parse/get-int.function
 */

/**
 * Helper function for resolving an integer string to a number type.
 *
 * @param numStr The string to parse
 * @param defValue Fallback value to return if parse fails.
 * @returns The parsed number. If parsing fails, then the default value is
 * returned.
 */
export function getInt(numStr: string, defValue: number) {
  const n = parseInt(numStr, 10);
  return isNaN(n) ? defValue : n;
}
