/**
 * Exports Cocos2d text node menu item factory function.
 *
 * @module
 */
import { createTextNode } from '../create-text-node.function';
import type { TextNodeConfig } from '../text-node-config.interface';
import type { TextNode } from '../text-node.interface';

import type { TextNodeMenuItemConfig } from './text-node-menu-item-config.interface';
import type { TextNodeMenuItemProtectedApi } from './text-node-menu-item-protected-api.interface';
import type { TextNodeMenuItem } from './text-node-menu-item.interface';

/**
 * Create a text node menu item instance.
 *
 * @param config Text node menu item configuration.
 * @param internal Optional internal/protected API. Facilitates inheritance.
 * @returns Text node menu item instance.
 */
export function createTextNodeMenuItem(config: TextNodeMenuItemConfig, internal?: TextNodeMenuItemProtectedApi) {
  // Public API container.
  const self = new cc.MenuItem(config.callback, config.target) as TextNodeMenuItem;

  // Protected API container.
  const internalApi = internal || ({} as TextNodeMenuItemProtectedApi);

  /**
   * Set text node and update scene graph.
   *
   * @param textNode Text node instance.
   */
  function setTextNode(textNode: TextNode) {
    internalApi.textNode = textNode;
    self.addChild(textNode);
    self.setContentSize(textNode.getContentSize());
  }

  self.setConfig = function (config) {
    const textNode = internalApi.textNode;

    if (textNode) {
      textNode.setConfig(config);
      self.setContentSize(textNode.getContentSize());
    } else {
      setTextNode(createTextNode(config));
    }

    return self;
  };

  self.setTextNode = function (textNode) {
    if (internalApi.textNode) {
      self.removeAllChildren();
      delete internalApi.textNode;
    }

    setTextNode(textNode);
    return self;
  };

  // Text node menu item is ready!
  return config.configOrTextNode instanceof cc.Node
    ? self.setTextNode(config.configOrTextNode as TextNode)
    : self.setConfig(config.configOrTextNode as TextNodeConfig);
}
