/**
 * Exports Cocos2d controllable menu control schema API.
 *
 * @module
 */

/**
 * Controllable menu control schema API.
 */
export interface ControllableMenuControlSchema {
  /**
   * Cancel operation key IDs.
   */
  cancel: number[];

  /**
   * Enable mouse flag.
   */
  enableMouse: boolean;

  /**
   * Next horizontal operation key IDs.
   */
  nextHorizontal: number[];

  /**
   * Next vertical operation key IDs.
   */
  nextVertical: number[];

  /**
   * OK operation key IDs.
   */
  ok: number[];

  /**
   * Previous horizontal operation key IDs.
   */
  previousHorizontal: number[];

  /**
   * Previous vertical operation key IDs.
   */
  previousVertical: number[];
}
