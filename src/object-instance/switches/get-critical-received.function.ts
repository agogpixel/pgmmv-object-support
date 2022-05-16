/**
 * Exports object instance get critical received switch variable value function.
 *
 * @module object-instance/switches/get-critical-received.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getSwitchValue } from './get-switch-value.function';

/**
 * Get critical received switch value.
 *
 * @param objectInstance Object instance.
 * @returns Switch value.
 */
export function getCriticalReceived(objectInstance: AgtkObjectInstance) {
  return getSwitchValue(objectInstance, Agtk.constants.objects.switches.CriticalDamagedId) as boolean;
}
