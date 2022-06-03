/**
 * Exports get text function.
 *
 * @module text/get-text.function
 */
import { resolveId } from './resolve-id.function';

/**
 * Get text with specified ID or name.
 *
 * @param key Text ID or name.
 * @returns Text object or `undefined`.
 */
export function getText(key: number | string) {
  const id = resolveId(key);

  if (id === -1) {
    return;
  }

  return Agtk.texts.get(id);
}
