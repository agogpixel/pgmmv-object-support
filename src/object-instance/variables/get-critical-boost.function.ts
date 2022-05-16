/**
 * Exports object instance get critical boost variable value function.
 *
 * @module object-instance/variables/get-critical-boost.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get critical boost variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getCriticalBoost(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.CriticalRatioId) as number;
}
