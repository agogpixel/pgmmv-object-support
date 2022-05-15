/**
 * Exports object instance get disable switch variable value function.
 *
 * @module object-instance/switches/get-disable.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getSwitchValue } from './get-switch-value.function';

/**
 * Get disable switch value.
 *
 * @param objectInstance Object instance.
 * @returns Switch value.
 */
export function getDisable(objectInstance: AgtkObjectInstance) {
  return getSwitchValue(objectInstance, Agtk.constants.objects.switches.DisabledId) as boolean;
}
