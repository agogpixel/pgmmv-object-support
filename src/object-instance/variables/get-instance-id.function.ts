/**
 * Exports object instance get instance id variable value function.
 *
 * @module object-instance/variables/get-instance-id.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get instance id value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getInstanceId(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.InstanceIDId) as number;
}
