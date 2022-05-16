/**
 * Exports object instance set free movement switch variable value function.
 *
 * @module object-instance/switches/set-free-movement.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setSwitchValue } from './set-switch-value.function';

/**
 * Set free movement switch value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setFreeMovement(objectInstance: AgtkObjectInstance, value: boolean) {
  setSwitchValue(objectInstance, Agtk.constants.objects.switches.FreeMoveId, value);
}
