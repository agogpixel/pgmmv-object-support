/**
 * Exports object instance get scale y variable value function.
 *
 * @module object-instance/variables/get-scale-y.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get scale y variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getScaleY(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.ScalingYId) as number;
}
