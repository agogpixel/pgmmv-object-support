/**
 * Exports object instance set display afterimage switch variable value function.
 *
 * @module object-instance/switches/set-display-afterimage.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setSwitchValue } from './set-switch-value.function';

/**
 * Set display afterimage switch value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setDisplayAfterimage(objectInstance: AgtkObjectInstance, value: boolean) {
  setSwitchValue(objectInstance, Agtk.constants.objects.switches.DisplayAfterimageId, value);
}
