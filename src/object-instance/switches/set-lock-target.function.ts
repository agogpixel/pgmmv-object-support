/**
 * Exports object instance set lock target switch variable value function.
 *
 * @module object-instance/switches/set-lock-target.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setSwitchValue } from './set-switch-value.function';

/**
 * Set lock target switch value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setLockTarget(objectInstance: AgtkObjectInstance, value: boolean) {
  setSwitchValue(objectInstance, Agtk.constants.objects.switches.LockTargetId, value);
}
