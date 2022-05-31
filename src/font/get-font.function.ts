/**
 * Exports get font function.
 *
 * @module font/get-font.function
 */
import { resolveId } from './resolve-id.function';

/**
 * Get font with specified ID or name.
 *
 * @param key Font ID or name.
 * @returns Font object or `undefined`.
 */
export function getFont(key: number | string) {
  const id = resolveId(key);

  if (id === -1) {
    return;
  }

  return Agtk.fonts.get(id);
}
