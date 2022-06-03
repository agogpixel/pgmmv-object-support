/**
 * Exports get image function.
 *
 * @module image/get-image.function
 */
import { resolveId } from './resolve-id.function';

/**
 * Get image with specified ID or name.
 *
 * @param key Image ID or name.
 * @returns Image object or `undefined`.
 */
export function getImage(key: number | string) {
  const id = resolveId(key);

  if (id === -1) {
    return;
  }

  return Agtk.images.get(id);
}
