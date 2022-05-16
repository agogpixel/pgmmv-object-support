/**
 * Exports object instance get time of invincibility variable value function.
 *
 * @module object-instance/variables/get-time-of-invincibility.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get time of invincibility variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getTimeOfInvincibility(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.InvincibleDurationId) as number;
}
