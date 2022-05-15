/**
 * Exports object instance set portal touched switch variable value function.
 *
 * @module object-instance/switches/set-portal-touched.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setSwitchValue } from './set-switch-value.function';

/**
 * Set portal touched switch value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setPortalTouched(objectInstance: AgtkObjectInstance, value: boolean) {
  setSwitchValue(objectInstance, Agtk.constants.objects.switches.PortalTouchedId, value);
}
