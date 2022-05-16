/**
 * Exports object instance set display direction variable value function.
 *
 * @module object-instance/variables/set-display-direction.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set display direction variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setDisplayDirection(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.DisplayDirectionId, value);
}
