/**
 * Exports object instance set y coordinate position variable value function.
 *
 * @module object-instance/variables/set-y-coordinate-position.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set y coordinate position variable variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setYCoordinatePosition(objectInstance: AgtkObjectInstance, value: number) {
  return setVariableValue(objectInstance, Agtk.constants.objects.variables.YId, value);
}
