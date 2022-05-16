/**
 * Exports object instance get horizontal max movement variable value function.
 *
 * @module object-instance/variables/get-horizontal-max-movement.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get horizontal max movement variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getHorizontalMaxMovement(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.HorizontalMaxMoveId) as number;
}
