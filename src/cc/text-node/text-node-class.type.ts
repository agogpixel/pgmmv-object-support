/**
 * Exports Cocos2d text node class type.
 *
 * @module
 */
import type { AgtkFont } from '@agogpixel/pgmmv-ts/api/agtk/font';
import type { AgtkText } from '@agogpixel/pgmmv-ts/api/agtk/text';
import type { CCColor } from '@agogpixel/pgmmv-ts/api/cc/color';
import type { CCNodeNamespace } from '@agogpixel/pgmmv-ts/api/cc/node';

import type { TextNodeAlignment } from './text-node-alignment.enum';
import type { TextNode } from './text-node.interface';

/**
 * Text node class type.
 */
export type TextNodeClass = {
  /**
   * Instantiate text node.
   *
   * @param keyOrText Text ID, name, or object.
   * @param locale Text locale.
   * @param fallbackFont Fallback when text does not have an associated font.
   * @param defaultColor Default text color.
   * @param alignment Horizontal text alignment.
   */
  new (
    keyOrText: number | string | AgtkText,
    locale: string,
    fallbackFont?: number | string | AgtkFont,
    defaultColor?: CCColor,
    alignment?: TextNodeAlignment
  ): TextNode;
} & CCNodeNamespace;
