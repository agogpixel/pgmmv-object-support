/**
 * Exports object instance get received damage amount variable value function.
 *
 * @module object-instance/variables/get-received-damage-amount.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get received damage amount variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getReceivedDamageAmount(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.DamageValueId) as number;
}
