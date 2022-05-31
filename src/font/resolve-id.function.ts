/**
 * Exports font resolve ID function.
 *
 * @module font/resolve-id.function
 */

/**
 * Resolve font ID.
 *
 * @param idOrName ID or name of font.
 * @returns ID or -1 when name not found.
 */
export function resolveId(idOrName: number | string) {
  if (typeof idOrName === 'string') {
    return Agtk.fonts.getIdByName(idOrName);
  }

  return idOrName;
}
