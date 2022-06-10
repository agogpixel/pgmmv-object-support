/**
 * Exports Cocos2d text node configuration API.
 *
 * @module
 */
import type { CCColor } from '@agogpixel/pgmmv-ts/api/cc/color';
import type { AgtkFont } from '@agogpixel/pgmmv-ts/api/agtk/font';
import type { AgtkText } from '@agogpixel/pgmmv-ts/api/agtk/text';

import type { TextNodeAlignment } from './text-node-alignment.enum';

/**
 * Text node configuration API.
 */
export interface TextNodeConfig {
  /**
   * Text ID, name, or object.
   */
  keyOrText: number | string | AgtkText;

  /**
   * Text locale.
   */
  locale: string;

  /**
   * Fallback when text does not have an associated font.
   */
  fallbackFont?: number | string | AgtkFont;

  /**
   * Default text color.
   */
  defaultColor?: CCColor;

  /**
   * Horizontal text alignment.
   */
  alignment?: TextNodeAlignment;
}
