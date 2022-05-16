/**
 * Exports object instance set single unit instance ID variable value function.
 *
 * @module object-instance/variables/set-single-unit-instance-id.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set single unit instance ID variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setSingleUnitInstanceId(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.SingleInstanceIDId, value);
}
