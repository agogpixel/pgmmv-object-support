/**
 * Exports object instance set critical rate variable value function.
 *
 * @module object-instance/variables/set-critical-rate.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set critical rate variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setCriticalRate(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.CriticalIncidenceId, value);
}
