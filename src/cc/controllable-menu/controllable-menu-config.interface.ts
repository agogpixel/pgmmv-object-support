/**
 * Exports Cocos2d controllable menu configuration API.
 *
 * @module
 */
import type { CCMenuItem } from '@agogpixel/pgmmv-ts/api/cc/menu-item';

import type { ControllableMenuCancel } from './controllable-menu-cancel.type';
import type { ControllableMenuControlSchema } from './controllable-menu-control-schema.interface';
import type { ControllableMenuLayout } from './controllable-menu-layout.interface';
import type { ControllableMenuOk } from './controllable-menu-ok.type';
import type { ControllableMenuSelected } from './controllable-menu-selected.type';

/**
 * Controllable menu configuration API.
 */
export interface ControllableMenuConfig {
  /**
   * Control schema.
   */
  controlSchema?: ControllableMenuControlSchema;

  /**
   * Enable menu on initialization?
   */
  enabled?: boolean;

  /**
   * Menu layout configuration.
   */
  layout?: ControllableMenuLayout;

  /**
   * Menu items.
   */
  menuItems?: CCMenuItem[];

  /**
   * On cancel callback.
   */
  onCancel?: ControllableMenuCancel;

  /**
   * On ok callback.
   */
  onOk?: ControllableMenuOk;

  /**
   * On selected callback.
   */
  onSelected?: ControllableMenuSelected;
}
