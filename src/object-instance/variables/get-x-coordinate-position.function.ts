/**
 * Exports object instance get x coordinate position variable value function.
 *
 * @module object-instance/variables/get-x-coordinate-position.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get x coordinate position variable variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getXCoordinatePosition(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.XId) as number;
}
