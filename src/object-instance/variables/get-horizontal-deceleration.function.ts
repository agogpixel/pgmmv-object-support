/**
 * Exports object instance get horizontal deceleration variable value function.
 *
 * @module object-instance/variables/get-horizontal-deceleration.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get horizontal deceleration variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getHorizontalDeceleration(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.HorizontalDecelId) as number;
}
