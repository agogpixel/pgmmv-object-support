/**
 * Exports object instance set received damage amount variable value function.
 *
 * @module object-instance/variables/set-received-damage-amount.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set received damage amount variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setReceivedDamageAmount(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.DamageValueId, value);
}
