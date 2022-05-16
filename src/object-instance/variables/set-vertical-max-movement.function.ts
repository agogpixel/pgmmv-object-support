/**
 * Exports object instance set vertical max movement variable value function.
 *
 * @module object-instance/variables/set-vertical-max-movement.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set vertical max movement variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setVerticalMaxMovement(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.VerticalMaxMoveId, value);
}
