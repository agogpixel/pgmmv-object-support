/**
 * Exports resolve text function.
 *
 * @module text/parse/resolve-text.function
 */
import type { AgtkText } from '@agogpixel/pgmmv-ts/api/agtk/text';

import { getText } from '../get-text.function';

/**
 * Resolve text.
 *
 * @param keyOrFont Text ID, name, or object.
 * @returns Text object or `undefined`.
 */
export function resolveText(keyOrText: number | string | AgtkText) {
  if (typeof keyOrText === 'number' || typeof keyOrText === 'string') {
    return getText(keyOrText);
  }

  return keyOrText;
}
