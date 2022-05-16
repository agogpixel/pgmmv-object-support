/**
 * Exports object instance set horizontal acceleration variable value function.
 *
 * @module object-instance/variables/set-horizontal-acceleration.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set horizontal acceleration variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setHorizontalAcceleration(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.HorizontalAccelId, value);
}
