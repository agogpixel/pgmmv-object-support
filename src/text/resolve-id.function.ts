/**
 * Exports text resolve ID function.
 *
 * @module text/resolve-id.function
 */

/**
 * Resolve text ID.
 *
 * @param idOrName ID or name of text.
 * @returns ID or -1 when name not found.
 */
export function resolveId(idOrName: number | string) {
  if (typeof idOrName === 'string') {
    return Agtk.texts.getIdByName(idOrName);
  }

  return idOrName;
}
