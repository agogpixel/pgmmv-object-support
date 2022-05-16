/**
 * Exports object instance set x coordinate position variable value function.
 *
 * @module object-instance/variables/set-x-coordinate-position.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set x coordinate position variable variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setXCoordinatePosition(objectInstance: AgtkObjectInstance, value: number) {
  return setVariableValue(objectInstance, Agtk.constants.objects.variables.XId, value);
}
