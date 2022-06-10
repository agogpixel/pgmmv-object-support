/**
 * Exports Cocos2d text node API.
 *
 * @module
 */
import type { AgtkFont } from '@agogpixel/pgmmv-ts/api/agtk/font';
import type { AgtkText } from '@agogpixel/pgmmv-ts/api/agtk/text';
import type { CCColor } from '@agogpixel/pgmmv-ts/api/cc/color';
import type { CCNode } from '@agogpixel/pgmmv-ts/api/cc/node';

import type { TextNodeAlignment } from './text-node-alignment.enum';
import type { TextNodeConfig } from './text-node-config.interface';

/**
 * Text node API.
 */
export interface TextNode extends CCNode {
  /**
   * Get horizontal text alignment.
   *
   * @returns Text node alignment.
   */
  getAlignment(): TextNodeAlignment;

  /**
   * Get copy of default text color.
   *
   * @returns Cocos color object.
   */
  getDefaultColor(): CCColor | undefined;

  /**
   * Get default letter height.
   *
   * @returns Letter height.
   */
  getDefaultLetterHeight(): number | undefined;

  /**
   * Get text locale.
   *
   * @returns Locale.
   */
  getLocale(): string | undefined;

  /**
   * Get normalized text (color & size text tags removed).
   *
   * @returns Text.
   */
  getNormalizedText(): string | undefined;

  /**
   * Get the source font data.
   *
   * @returns Agtk font object.
   */
  getSourceFontData(): AgtkFont | undefined;

  /**
   * Get the source text data.
   *
   * @returns Agtk text object.
   */
  getSourceTextData(): AgtkText | undefined;

  /**
   * Set configuration. This updates the displayed text.
   *
   * @param config Text node configuration.
   * @returns Reference to this text node instance.
   */
  setConfig(config: TextNodeConfig): TextNode;
}
