/**
 * Exports object instance set horizontal max movement variable value function.
 *
 * @module object-instance/variables/set-horizontal-max-movement.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set horizontal max movement variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setHorizontalMaxMovement(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.HorizontalMaxMoveId, value);
}
