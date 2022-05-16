/**
 * Exports object instance set display priority variable value function.
 *
 * @module object-instance/variables/set-display-priority.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set display priority variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setDisplayPriority(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.DispPriorityId, value);
}
