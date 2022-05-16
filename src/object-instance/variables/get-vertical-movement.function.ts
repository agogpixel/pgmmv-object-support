/**
 * Exports object instance get vertical movement variable value function.
 *
 * @module object-instance/variables/get-vertical-movement.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get vertical movement variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getVerticalMovement(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.VerticalMoveId) as number;
}
