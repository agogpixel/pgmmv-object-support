/**
 * Exports object instance get lock target switch variable value function.
 *
 * @module object-instance/switches/get-lock-target.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getSwitchValue } from './get-switch-value.function';

/**
 * Get lock target switch value.
 *
 * @param objectInstance Object instance.
 * @returns Switch value.
 */
export function getLockTarget(objectInstance: AgtkObjectInstance) {
  return getSwitchValue(objectInstance, Agtk.constants.objects.switches.LockTargetId) as boolean;
}
