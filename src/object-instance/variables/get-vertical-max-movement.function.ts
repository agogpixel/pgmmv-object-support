/**
 * Exports object instance get vertical max movement variable value function.
 *
 * @module object-instance/variables/get-vertical-max-movement.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get vertical max movement variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getVerticalMaxMovement(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.VerticalMaxMoveId) as number;
}
