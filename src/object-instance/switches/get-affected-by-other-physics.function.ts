/**
 * Exports object instance get affected by other physics switch variable value function.
 *
 * @module object-instance/switches/get-affected-by-other-physics.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getSwitchValue } from './get-switch-value.function';

/**
 * Get affected by other physics switch value.
 *
 * @param objectInstance Object instance.
 * @returns Switch value.
 */
export function getAffectedByOtherPhysics(objectInstance: AgtkObjectInstance) {
  return getSwitchValue(objectInstance, Agtk.constants.objects.switches.AffectedByOtherObjectsId) as boolean;
}
