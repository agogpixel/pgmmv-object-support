/**
 * Exports parsed text line API.
 *
 * @module text/parse/parsed-text-line.interface
 */
import type { ParsedTextLineSegment } from './parsed-text-line-segment.interface';

/**
 * Parsed text line API.
 */
export interface ParsedTextLine {
  /**
   * Normalized text for this line.
   */
  normalizedText: string;

  /**
   * Parsed text line segments.
   */
  parsedTextLineSegments: ParsedTextLineSegment[];
}
