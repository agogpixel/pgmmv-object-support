/**
 * Exports object instance set affected by other physics switch variable value function.
 *
 * @module object-instance/switches/set-affected-by-other-physics.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setSwitchValue } from './set-switch-value.function';

/**
 * Set affected by other physics switch value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setAffectedByOtherPhysics(objectInstance: AgtkObjectInstance, value: boolean) {
  setSwitchValue(objectInstance, Agtk.constants.objects.switches.AffectedByOtherObjectsId, value);
}
