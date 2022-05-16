/**
 * Exports object instance get attack attribute variable value function.
 *
 * @module object-instance/variables/get-attack-attribute.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get attack attribute variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getAttackAttribute(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.AttackAttributeId);
}
