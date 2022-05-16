/**
 * Exports object instance set invinicibility switch variable value function.
 *
 * @module object-instance/switches/set-invinicibility.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setSwitchValue } from './set-switch-value.function';

/**
 * Set invincibility switch value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setInvincibility(objectInstance: AgtkObjectInstance, value: boolean) {
  setSwitchValue(objectInstance, Agtk.constants.objects.switches.InvincibleId, value);
}
