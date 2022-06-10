/**
 * Exports Cocos2d text node menu item configuration API.
 *
 * @module
 */
import type { CCNode } from '@agogpixel/pgmmv-ts/api/cc/node';

import type { TextNodeConfig } from '../text-node-config.interface';
import type { TextNode } from '../text-node.interface';

/**
 * Text node menu item configuration API.
 */
export interface TextNodeMenuItemConfig {
  /**
   * Text node configuration or instance.
   */
  configOrTextNode: TextNodeConfig | TextNode;

  /**
   * Optional callback.
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  callback?: Function | string;

  /**
   * Optional callback this target.
   */
  target?: CCNode;
}
