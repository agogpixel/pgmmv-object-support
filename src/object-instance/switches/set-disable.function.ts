/**
 * Exports object instance set disable switch variable value function.
 *
 * @module object-instance/switches/set-disable.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setSwitchValue } from './set-switch-value.function';

/**
 * Set disable switch value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setDisable(objectInstance: AgtkObjectInstance, value: boolean) {
  setSwitchValue(objectInstance, Agtk.constants.objects.switches.DisabledId, value);
}
