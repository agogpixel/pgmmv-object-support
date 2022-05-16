/**
 * Exports object instance set attack attribute variable value function.
 *
 * @module object-instance/variables/set-attack-attribute.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set attack attribute variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setAttackAttribute(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.AttackAttributeId, value);
}
