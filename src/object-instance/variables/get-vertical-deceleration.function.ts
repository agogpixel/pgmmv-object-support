/**
 * Exports object instance get vertical deceleration variable value function.
 *
 * @module object-instance/variables/get-vertical-deceleration.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get vertical deceleration variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getVerticalDeceleration(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.VerticalDecelId) as number;
}
