/**
 * Exports object instance get display priority variable value function.
 *
 * @module object-instance/variables/get-display-priority.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get display priority variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getDisplayPriority(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.DispPriorityId) as number;
}
