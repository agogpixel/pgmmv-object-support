/**
 * Exports object instance get received damage rate variable value function.
 *
 * @module object-instance/variables/get-received-damage-rate.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get received damage rate variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getReceivedDamageRate(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.DamageRatioId) as number;
}
