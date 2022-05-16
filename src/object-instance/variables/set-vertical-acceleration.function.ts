/**
 * Exports object instance set vertical acceleration variable value function.
 *
 * @module object-instance/variables/set-vertical-acceleration.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set vertical acceleration variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setVerticalAcceleration(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.VerticalAccelId, value);
}
