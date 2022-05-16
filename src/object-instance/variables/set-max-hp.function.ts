/**
 * Exports object instance set max hp variable value function.
 *
 * @module object-instance/variables/set-max-hp.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set max hp variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setMaxHP(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.MaxHPId, value);
}
