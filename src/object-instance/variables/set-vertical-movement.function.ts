/**
 * Exports object instance set vertical movement variable value function.
 *
 * @module object-instance/variables/set-vertical-movement.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set vertical movement variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setVerticalMovement(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.VerticalMoveId, value);
}
