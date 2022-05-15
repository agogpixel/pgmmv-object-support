/**
 * Exports object instance set affect other physics switch variable value function.
 *
 * @module object-instance/switches/set-affect-other-physics.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setSwitchValue } from './set-switch-value.function';

/**
 * Set affect other physics switch value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setAffectOtherPhysics(objectInstance: AgtkObjectInstance, value: boolean) {
  setSwitchValue(objectInstance, Agtk.constants.objects.switches.AffectOtherObjectsId, value);
}
