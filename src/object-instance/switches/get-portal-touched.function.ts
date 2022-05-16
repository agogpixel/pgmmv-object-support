/**
 * Exports object instance get portal touched switch variable value function.
 *
 * @module object-instance/switches/get-portal-touched.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getSwitchValue } from './get-switch-value.function';

/**
 * Get portal touched switch value.
 *
 * @param objectInstance Object instance.
 * @returns Switch value.
 */
export function getPortalTouched(objectInstance: AgtkObjectInstance) {
  return getSwitchValue(objectInstance, Agtk.constants.objects.switches.PortalTouchedId) as boolean;
}
