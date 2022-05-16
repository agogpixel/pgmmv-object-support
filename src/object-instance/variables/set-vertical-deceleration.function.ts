/**
 * Exports object instance set vertical deceleration variable value function.
 *
 * @module object-instance/variables/set-vertical-deceleration.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set vertical deceleration variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setVerticalDeceleration(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.VerticalDecelId, value);
}
