/**
 * Exports object instance get invinicibility switch variable value function.
 *
 * @module object-instance/switches/get-invinicibility.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getSwitchValue } from './get-switch-value.function';

/**
 * Get invincibility switch value.
 *
 * @param objectInstance Object instance.
 * @returns Switch value.
 */
export function getInvincibility(objectInstance: AgtkObjectInstance) {
  return getSwitchValue(objectInstance, Agtk.constants.objects.switches.InvincibleId) as boolean;
}
