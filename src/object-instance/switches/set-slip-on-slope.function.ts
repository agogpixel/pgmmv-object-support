/**
 * Exports object instance set slip on slope switch variable value function.
 *
 * @module object-instance/switches/set-slip-on-slope.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setSwitchValue } from './set-switch-value.function';

/**
 * Set slip on slope switch value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setSlipOnSlope(objectInstance: AgtkObjectInstance, value: boolean) {
  setSwitchValue(objectInstance, Agtk.constants.objects.switches.SlipOnSlopeId, value);
}
