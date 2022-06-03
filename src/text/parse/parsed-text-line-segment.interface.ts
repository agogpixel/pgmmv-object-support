/**
 * Exports parsed text line segment API.
 *
 * @module text/parse/parsed-text-line-segment.interface
 */
import type { CCColor } from '@agogpixel/pgmmv-ts/api/cc/color';

/**
 * Parsed text line segment API.
 */
export interface ParsedTextLineSegment {
  /**
   * Normalized text for this segment.
   */
  normalizedText: string;

  /**
   * Text color.
   */
  color: CCColor;

  /**
   * Text size.
   */
  size: number;
}
