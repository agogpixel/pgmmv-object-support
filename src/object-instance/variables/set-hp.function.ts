/**
 * Exports object instance set hp variable value function.
 *
 * @module object-instance/variables/set-hp.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set hp variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setHP(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.HPId, value);
}
