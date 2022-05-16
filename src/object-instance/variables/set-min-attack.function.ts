/**
 * Exports object instance set min attack variable value function.
 *
 * @module object-instance/variables/set-min-attack.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set min attack variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setMinAttack(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.MinimumAttackId, value);
}
