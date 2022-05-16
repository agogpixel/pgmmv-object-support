/**
 * Exports object instance get hp variable value function.
 *
 * @module object-instance/variables/get-hp.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get hp variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getHP(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.HPId) as number;
}
