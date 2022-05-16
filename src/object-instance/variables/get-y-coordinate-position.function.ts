/**
 * Exports object instance get y coordinate position variable value function.
 *
 * @module object-instance/variables/get-y-coordinate-position.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get y coordinate position variable variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getYCoordinatePosition(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.YId) as number;
}
