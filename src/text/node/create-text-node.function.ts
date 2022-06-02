/**
 * Exports Cocos2d text node factory.
 *
 * @module
 */
import type { AgtkFont } from '@agogpixel/pgmmv-ts/api/agtk/font';
import type { AgtkText } from '@agogpixel/pgmmv-ts/api/agtk/text';
import type { CCColor } from '@agogpixel/pgmmv-ts/api/cc/color';

import { createTextNodeClass } from './create-text-node-class.function';
import type { TextNodeAlignment } from './text-node-alignment.enum';

/**
 * Create a text node.
 *
 * @param keyOrText Text ID, name, or object.
 * @param locale Text locale.
 * @param fallbackFont Fallback when text does not have an associated font.
 * @param defaultColor Default text color.
 * @param alignment Horizontal text alignment.
 */
export function createTextNode(
  keyOrText: number | string | AgtkText,
  locale: string,
  fallbackFont?: number | string | AgtkFont,
  defaultColor?: CCColor,
  alignment?: TextNodeAlignment
) {
  return new (createTextNodeClass())(keyOrText, locale, fallbackFont, defaultColor, alignment);
}
