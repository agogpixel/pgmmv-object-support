/**
 * Exports object instance set horizontal deceleration variable value function.
 *
 * @module object-instance/variables/set-horizontal-deceleration.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set horizontal deceleration variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setHorizontalDeceleration(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.HorizontalDecelId, value);
}
