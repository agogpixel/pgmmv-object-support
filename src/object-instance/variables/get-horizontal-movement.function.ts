/**
 * Exports object instance get horizontal movement variable value function.
 *
 * @module object-instance/variables/get-horizontal-movement.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get horizontal movement variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getHorizontalMovement(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.HorizontalMoveId) as number;
}
