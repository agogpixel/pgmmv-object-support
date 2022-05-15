/**
 * Exports object instance get affect other physics switch variable value function.
 *
 * @module object-instance/switches/get-affect-other-physics.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getSwitchValue } from './get-switch-value.function';

/**
 * Get affect other physics switch value.
 *
 * @param objectInstance Object instance.
 * @returns Switch value.
 */
export function getAffectOtherPhysics(objectInstance: AgtkObjectInstance) {
  return getSwitchValue(objectInstance, Agtk.constants.objects.switches.AffectOtherObjectsId) as boolean;
}
