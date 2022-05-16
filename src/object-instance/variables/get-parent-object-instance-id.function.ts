/**
 * Exports object instance get parent object instance ID variable value function.
 *
 * @module object-instance/variables/get-parent-object-instance-id.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get parent object instance ID variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getParentObjectInstanceId(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.ParentObjectInstanceIDId) as number;
}
