/**
 * Exports object instance get min attack variable value function.
 *
 * @module object-instance/variables/get-min-attack.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get min attack variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getMinAttack(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.MinimumAttackId) as number;
}
