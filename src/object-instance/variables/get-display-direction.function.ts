/**
 * Exports object instance get display direction variable value function.
 *
 * @module object-instance/variables/get-display-direction.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get display direction variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getDisplayDirection(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.DisplayDirectionId) as number;
}
