/**
 * Exports Cocos2d controllable menu protected API.
 *
 * @module
 */
import type { CCSize } from '@agogpixel/pgmmv-ts/api/cc/size';

import type { ControllerService } from '../../controller/service/controller-service.interface';

import type { ControllableMenuControlSchema } from './controllable-menu-control-schema.interface';
import type { ControllableMenuLayout } from './controllable-menu-layout.interface';

/**
 * Controllable menu protected API.
 */
export interface ControllableMenuProtectedApi {
  /**
   * Controller service.
   *
   * @protected
   */
  controllerService: ControllerService;

  /**
   * Control schema.
   *
   * @protected
   */
  controlSchema: ControllableMenuControlSchema;

  /**
   * Is enabled?
   *
   * @protected
   */
  enabled: boolean;

  /**
   * Menu layout configuration.
   *
   * @protected
   */
  layout: ControllableMenuLayout;

  /**
   * Maps menu item position string (column, row) to index.
   *
   * @protected
   */
  layoutMap?: Record<string, number>;

  /**
   * Maps menu item index to position string (column, row).
   *
   * @protected
   */
  layoutReverseMap?: Record<number, string>;

  /**
   * Menu navigation maximum columns.
   *
   * @protected
   */
  maxColumns: number;

  /**
   * Maximum menu item dimensions.
   *
   * @protected
   */
  maxMenuItemSize: CCSize;

  /**
   * Menu navigation maximum rows.
   *
   * @protected
   */
  maxRows: number;
}
