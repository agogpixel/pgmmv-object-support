/**
 * Exports object instance get slip on slope switch variable value function.
 *
 * @module object-instance/switches/get-slip-on-slope.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getSwitchValue } from './get-switch-value.function';

/**
 * Get slip on slope switch value.
 *
 * @param objectInstance Object instance.
 * @returns Switch value.
 */
export function getSlipOnSlope(objectInstance: AgtkObjectInstance) {
  return getSwitchValue(objectInstance, Agtk.constants.objects.switches.SlipOnSlopeId) as boolean;
}
