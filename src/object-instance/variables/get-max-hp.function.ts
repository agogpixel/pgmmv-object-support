/**
 * Exports object instance get max hp variable value function.
 *
 * @module object-instance/variables/get-max-hp.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get max hp variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getMaxHP(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.MaxHPId) as number;
}
