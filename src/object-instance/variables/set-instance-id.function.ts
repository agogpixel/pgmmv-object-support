/**
 * Exports object instance set instance id variable value function.
 *
 * @module object-instance/variables/set-instance-id.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set instance id variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setInstanceId(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.InstanceIDId, value);
}
