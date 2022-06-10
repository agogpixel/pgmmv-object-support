/**
 * Exports Cocos2d text node protected API.
 *
 * @module
 */
import type { CCNode } from '@agogpixel/pgmmv-ts/api/cc/node';

import type { ParsedText } from '../../text/parse/parsed-text.interface';

import type { TextNodeAlignment } from './text-node-alignment.enum';

/**
 * Text node protected API.
 */
export interface TextNodeProtectedApi {
  /**
   * Horizontal text alignment.
   *
   * @protected
   */
  alignment: TextNodeAlignment;

  /**
   * Parsed text.
   *
   * @protected
   */
  parsedText?: ParsedText;

  /**
   * Renderable text lines.
   *
   * @protected
   */
  renderableTextLines?: CCNode[];
}
