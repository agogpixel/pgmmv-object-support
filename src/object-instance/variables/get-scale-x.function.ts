/**
 * Exports object instance get scale x variable value function.
 *
 * @module object-instance/variables/get-scale-x.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get scale x variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getScaleX(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.ScalingXId) as number;
}
