/**
 * Exports Cocos2d text node menu item protected API.
 *
 * @module
 */
import type { TextNode } from '../text-node.interface';

/**
 * Text node menu item protected API.
 */
export interface TextNodeMenuItemProtectedApi {
  /**
   * Text node instance.
   *
   * @protected
   */
  textNode?: TextNode;
}
