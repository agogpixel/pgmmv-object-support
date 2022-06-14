/**
 * Exports Cocos2d controllable menu ok callback type.
 *
 * @module
 */
import type { CCMenuItem } from '@agogpixel/pgmmv-ts/api/cc/menu-item';

import type { ControllableMenu } from './controllable-menu.interface';

/**
 * Controllable menu ok callback type.
 */
export type ControllableMenuOk = (menu: ControllableMenu, menuItem: CCMenuItem, index: number) => void;
