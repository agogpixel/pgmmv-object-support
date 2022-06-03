/**
 * Exports resolve font function.
 *
 * @module text/parse/resolve-font.function
 */

import type { AgtkFont } from '@agogpixel/pgmmv-ts/api/agtk/font';

import { getFont } from '../../font/get-font.function';

/**
 * Resolve font.
 *
 * @param keyOrFont Font ID, name, or object.
 * @returns Font object or `undefined`.
 */
export function resolveFont(keyOrFont: number | string | AgtkFont) {
  if (typeof keyOrFont === 'number' || typeof keyOrFont === 'string') {
    return getFont(keyOrFont);
  }

  return keyOrFont;
}
