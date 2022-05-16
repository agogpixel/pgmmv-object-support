/**
 * Exports object instance get damage spread variable value function.
 *
 * @module object-instance/variables/get-damage-spread.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get damage spread variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getDamageSpread(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.DamageVariationValueId) as number;
}
