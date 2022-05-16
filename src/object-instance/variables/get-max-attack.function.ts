/**
 * Exports object instance get max attack variable value function.
 *
 * @module object-instance/variables/get-max-attack.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get max attack variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getMaxAttack(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.MaximumAttackId) as number;
}
