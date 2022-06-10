/**
 * Exports Cocos2d controllable menu API.
 *
 * @module
 */
import type { AgtkConstants } from '@agogpixel/pgmmv-ts/api/agtk/constants';
import type { CCMenuPassive } from '@agogpixel/pgmmv-ts/api/cc/menu-passive';

import type { ControllableMenuControlSchema } from './controllable-menu-control-schema.interface';
import type { ControllableMenuLayoutHorizontalCellAlignment } from './controllable-menu-layout-horizontal-cell-alignment.enum';
import type { ControllableMenuLayoutMainAxis } from './controllable-menu-layout-main-axis.enum';
import type { ControllableMenuLayoutVerticalCellAlignment } from './controllable-menu-layout-vertical-cell-alignment.enum';
import type { ControllableMenuLayout } from './controllable-menu-layout.interface';

type CommandBehaviorObject = AgtkConstants['actionCommands']['commandBehavior'];
type CommandBehaviorKey = keyof CommandBehaviorObject;
type CommandBehavior = CommandBehaviorObject[CommandBehaviorKey];

/**
 * Controllable menu API.
 */
export interface ControllableMenu extends CCMenuPassive {
  /**
   * Get control schema.
   *
   * @returns Reference to controllable menu control schema.
   */
  getControlSchema(): ControllableMenuControlSchema;

  /**
   * Get horizontal cell alignment.
   *
   * @returns Menu layout horizontal cell alignment.
   */
  getHorizontalCellAlignment(): ControllableMenuLayoutHorizontalCellAlignment;

  /**
   * Get main axis.
   *
   * @returns Menu layout main axis.
   */
  getMainAxis(): ControllableMenuLayoutMainAxis;

  /**
   * Get max cells.
   *
   * @returns Menu layout max cells.
   */
  getMaxCells(): number[] | undefined;

  /**
   * Get padding.
   *
   * @returns Menu layout padding.
   */
  getPadding(): number;

  /**
   * Get vertical cell alignment.
   *
   * @returns Menu layout vertical cell alignment.
   */
  getVerticalCellAlignment(): ControllableMenuLayoutVerticalCellAlignment;

  /**
   * Is enabled?
   *
   * @returns True when menu is enabled, false otherwise.
   */
  isEnabled(): boolean;

  /**
   * Refresh the menu display.
   *
   * @returns Reference to this controllable menu instance.
   */
  refresh(): ControllableMenu;

  /**
   * Set enabled.
   *
   * @param enabled Menu enabled flag.
   * @returns Reference to this controllable menu instance.
   */
  setEnabled(enabled: boolean): ControllableMenu;

  /**
   * Set horizontal cell alignment.
   *
   * @param alignment Menu layout horizontal cell alignment.
   * @returns Reference to this controllable menu instance.
   */
  setHorizontalCellAlignment(alignment: ControllableMenuLayoutHorizontalCellAlignment): ControllableMenu;

  /**
   * Set layout.
   *
   * @param layout Menu layout configuration.
   * @returns Reference to this controllable menu instance.
   */
  setLayout(layout: ControllableMenuLayout): ControllableMenu;

  /**
   * Set main axis.
   *
   * @param axis Menu layout main axis.
   * @returns Reference to this controllable menu instance.
   */
  setMainAxis(axis: ControllableMenuLayoutMainAxis): ControllableMenu;

  /**
   * Set max cells.
   *
   * @param maxCells Menu layout max cells.
   * @returns Reference to this controllable menu instance.
   */
  setMaxCells(maxCells?: number[]): ControllableMenu;

  /**
   * Set layout padding.
   *
   * @param padding  Menu layout padding.
   * @returns Reference to this controllable menu instance.
   */
  setPadding(padding: number): ControllableMenu;

  /**
   * Set vertical cell alignment.
   *
   * @param alignment Menu layout vertical cell alignment.
   * @returns Reference to this controllable menu instance.
   */
  setVerticalCellAlignment(alignment: ControllableMenuLayoutVerticalCellAlignment): ControllableMenu;

  /**
   * Update menu state.
   *
   * @returns Command behavior.
   */
  update(): CommandBehavior;
}
