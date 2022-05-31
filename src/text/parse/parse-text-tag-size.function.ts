/**
 * Exports parse text tag size function.
 *
 * @module text/parse/parse-text-tag-size.function
 */
import { getInt } from './get-int.function';

/**
 * Parse text tag size.
 *
 * @param subject Text tag content.
 * @param currentSize Current text size (for relative size tags).
 * @param defaultSize Fallback size if subject is invalid.
 * @returns Text size.
 */
export function parseTextTagSize(subject: string, currentSize: number, defaultSize: number) {
  if (subject.length == 0) {
    return defaultSize;
  } else if (subject[0] === '+') {
    return Math.max(0, currentSize + getInt(subject.substring(1), 0));
  } else if (subject[0] === '-') {
    return Math.max(0, currentSize - getInt(subject.substring(1), 0));
  }

  return Math.max(0, getInt(subject, defaultSize));
}
