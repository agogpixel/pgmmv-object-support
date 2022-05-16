/**
 * Exports object instance get x direction speed variable value function.
 *
 * @module object-instance/variables/get-x-direction-speed.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get x direction speed variable variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getXDirectionSpeed(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.VelocityXId) as number;
}
