/**
 * Exports object instance get critical rate variable value function.
 *
 * @module object-instance/variables/get-critical-rate.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get critical rate variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getCriticalRate(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.CriticalIncidenceId) as number;
}
