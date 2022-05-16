/**
 * Exports object instance get y direction speed variable value function.
 *
 * @module object-instance/variables/get-y-direction-speed.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get y direction speed variable variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getYDirectionSpeed(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.VelocityYId) as number;
}
