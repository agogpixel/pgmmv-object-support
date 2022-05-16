/**
 * Exports object instance set object ID variable value function.
 *
 * @module object-instance/variables/set-object-id.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set object ID variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setObjectId(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.ObjectIDId, value);
}
