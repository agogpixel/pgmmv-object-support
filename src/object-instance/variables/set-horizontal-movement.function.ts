/**
 * Exports object instance set horizontal movement variable value function.
 *
 * @module object-instance/variables/set-horizontal-movement.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set horizontal movement variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setHorizontalMovement(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.HorizontalMoveId, value);
}
