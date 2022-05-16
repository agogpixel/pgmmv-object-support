/**
 * Exports object instance get display afterimage switch variable value function.
 *
 * @module object-instance/switches/get-display-afterimage.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getSwitchValue } from './get-switch-value.function';

/**
 * Get display afterimage switch value.
 *
 * @param objectInstance Object instance.
 * @returns Switch value.
 */
export function getDisplayAfterimage(objectInstance: AgtkObjectInstance) {
  return getSwitchValue(objectInstance, Agtk.constants.objects.switches.DisplayAfterimageId) as boolean;
}
