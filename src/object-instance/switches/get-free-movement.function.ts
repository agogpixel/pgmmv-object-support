/**
 * Exports object instance get free movement switch variable value function.
 *
 * @module object-instance/switches/get-free-movement.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getSwitchValue } from './get-switch-value.function';

/**
 * Get free movement switch value.
 *
 * @param objectInstance Object instance.
 * @returns Switch value.
 */
export function getFreeMovement(objectInstance: AgtkObjectInstance) {
  return getSwitchValue(objectInstance, Agtk.constants.objects.switches.FreeMoveId) as boolean;
}
