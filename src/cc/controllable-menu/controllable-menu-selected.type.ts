/**
 * Exports Cocos2d controllable menu selected callback type.
 *
 * @module
 */
import type { CCMenuItem } from '@agogpixel/pgmmv-ts/api/cc/menu-item';

import type { ControllableMenu } from './controllable-menu.interface';

/**
 * Menu selected callback type.
 */
export type ControllableMenuSelected = (menu: ControllableMenu, menuItem: CCMenuItem, index: number) => void;
