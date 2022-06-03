/**
 * Exports image resolve ID function.
 *
 * @module image/resolve-id.function
 */

/**
 * Resolve image ID.
 *
 * @param idOrName ID or name of image.
 * @returns ID or -1 when name not found.
 */
export function resolveId(idOrName: number | string) {
  if (typeof idOrName === 'string') {
    return Agtk.images.getIdByName(idOrName);
  }

  return idOrName;
}
