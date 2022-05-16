/**
 * Exports object instance set critical received switch variable value function.
 *
 * @module object-instance/switches/set-critical-received.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setSwitchValue } from './set-switch-value.function';

/**
 * Set critical received switch value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setCriticalReceived(objectInstance: AgtkObjectInstance, value: boolean) {
  setSwitchValue(objectInstance, Agtk.constants.objects.switches.CriticalDamagedId, value);
}
