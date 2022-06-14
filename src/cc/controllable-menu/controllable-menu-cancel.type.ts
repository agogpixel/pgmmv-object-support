/**
 * Exports Cocos2d controllable menu cancel callback type.
 *
 * @module
 */
import type { ControllableMenu } from './controllable-menu.interface';

/**
 * Controllable menu cancel callback type.
 */
export type ControllableMenuCancel = (menu: ControllableMenu) => void;
