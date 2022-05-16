/**
 * Exports object instance set damage spread variable value function.
 *
 * @module object-instance/variables/set-damage-spread.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set damage spread variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setDamageSpread(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.DamageVariationValueId, value);
}
