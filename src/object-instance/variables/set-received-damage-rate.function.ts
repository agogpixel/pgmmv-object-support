/**
 * Exports object instance set received damage rate variable value function.
 *
 * @module object-instance/variables/set-received-damage-rate.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set received damage rate variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setReceivedDamageRate(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.DamageRatioId, value);
}
