/**
 * Exports parsed text API.
 *
 * @module text/parse/parsed-text.interface
 */
import type { CCColor } from '@agogpixel/pgmmv-ts/api/cc/color';
import type { AgtkFont } from '@agogpixel/pgmmv-ts/api/agtk/font';
import type { AgtkText } from '@agogpixel/pgmmv-ts/api/agtk/text';

import type { ParsedTextLine } from './parsed-text-line.interface';

/**
 * Parsed text API.
 */
export interface ParsedText {
  /**
   * Text locale.
   */
  locale: string;

  /**
   * Normalize text.
   */
  normalizedText: string;

  /**
   * Parsed text lines.
   */
  parsedTextLines: ParsedTextLine[];

  /**
   * Source text data.
   */
  sourceTextData: AgtkText;

  /**
   * Source font data.
   */
  sourceFontData: AgtkFont;

  /**
   * Default color.
   */
  defaultColor: CCColor;

  /**
   * Default letter height.
   */
  defaultLetterHeight: number;
}
