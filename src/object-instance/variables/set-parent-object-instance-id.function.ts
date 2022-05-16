/**
 * Exports object instance set parent object instance ID variable value function.
 *
 * @module object-instance/variables/set-parent-object-instance-id.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set parent object instance ID variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setParentObjectInstanceId(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.ParentObjectInstanceIDId, value);
}
