/**
 * Exports object instance get single unit instance ID variable value function.
 *
 * @module object-instance/variables/get-single-unit-instance-id.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get single unit instance ID variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getSingleUnitInstanceId(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.SingleInstanceIDId) as number;
}
