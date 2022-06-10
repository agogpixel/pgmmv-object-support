/**
 * Exports Cocos2d text node menu item API.
 *
 * @module
 */
import type { CCMenuItem } from '@agogpixel/pgmmv-ts/api/cc/menu-item';

import { TextNodeConfig } from '../text-node-config.interface';
import { TextNode } from '../text-node.interface';

/**
 * Text node menu item API.
 */
export interface TextNodeMenuItem extends CCMenuItem {
  /**
   * Set text node configuration. Updates display.
   *
   * @param config Text node configuration.
   * @returns Reference to this text node menu item.
   */
  setConfig(config: TextNodeConfig): TextNodeMenuItem;

  /**
   * Set text node. Updates display.
   *
   * @param textNode Text node instance.
   * @returns Reference to this text node menu item.
   */
  setTextNode(textNode: TextNode): TextNodeMenuItem;
}
