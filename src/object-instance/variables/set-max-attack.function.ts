/**
 * Exports object instance set max attack variable value function.
 *
 * @module object-instance/variables/set-max-attack.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set max attack variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setMaxAttack(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.MaximumAttackId, value);
}
