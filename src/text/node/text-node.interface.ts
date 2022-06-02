/**
 * Exports Cocos2d text node API.
 *
 * @module
 */
import type { CCNode } from '@agogpixel/pgmmv-ts/api/cc/node';

import type { ParsedText } from '../parse/parsed-text.interface';

/**
 * Text node API.
 */
export interface TextNode extends CCNode {
  /**
   * Parsed text.
   */
  parsedText: ParsedText;

  /**
   * Renderable text lines.
   */
  renderableTextLines: CCNode[];
}
